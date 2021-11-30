export interface App {
  firstName: string;
  lastName: string;
  $store: any;
  myName: string;
  saveName(): void;
  changeFirstName: Record<string, unknown>;
  changeLastName: Record<string, unknown>;
}
