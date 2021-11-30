export interface App {
  saveName(): void;
  addToCart(product: any): void;
  firstName: string;
  lastName: string;
  $store: any;
  myName: string;
  changeFirstName: Record<string, unknown>;
  changeLastName: Record<string, unknown>;
}
