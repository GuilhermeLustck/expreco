import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



export const autorizacaoGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot,
   state:RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  
    const id=sessionStorage.getItem("uidUser")

    if(id){

      return true

    }else{

      return false

    }
  
    


  



};
