import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



export const pagamGuard: CanActivateFn  = (
  route:ActivatedRouteSnapshot,
   state:RouterStateSnapshot,
   
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    
    const car= localStorage.getItem("carrinho")
    if(car==""){

      return false

    }else{

      return true

    }
    
  }
