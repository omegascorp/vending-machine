import { Product } from "../../shared/types/product";
import { User, UserRole } from "../../shared/types/user";
import { AccessError } from "../services/routerErrorService";

export function checkProductCreateAccess(user: User) {
  if (user && user.role === UserRole.seller) {
    return;
  }
  throw new AccessError("Access Denied");
}

export function checkProductEditAccess(user: User, product: Product) {
  if (
    user &&
    product &&
    user.role === UserRole.seller &&
    user._id.toString() === product.sellerId.toString()
  ) {
    return;
  }
  throw new AccessError("Access Denied");
}
