declare type TTransaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  accountId: string;
  amount: number;
  pending: boolean;
  status: Status;
  category: Category;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};
declare type Category =
  | 'Food and Drink'
  | 'Travel'
  | 'Transfer'
  | 'Shopping'
  | 'Food'
  | 'Housing'
  | 'Utilities'
  | 'Salary'
  | 'Groceries'
  | 'Subscription'
  | 'Income'
  | 'Rent'
  | 'Deposit'
  | 'Withdrawal'
  | 'Interest'
  | 'Payment'
  | 'Transfer'
  | 'Credit Card'
  | 'Loan'
  | 'Investment'
  | 'Other';
declare type TCategoryGroup = 'Subscriptions' | 'Food and booze' | 'Savings';
declare type CategoryGroupMap = {
  [key in Category]: TCategoryGroup;
};
declare type Status = 'Success' | 'Processing' | 'Declined';
export default TTransaction;
export type { Category, Status, CategoryGroupMap, TCategoryGroup };