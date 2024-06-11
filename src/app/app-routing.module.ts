import { NgModule, NgModuleFactory, Type } from '@angular/core';
import { DefaultExport, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { autorizacaoGuard } from './guard/autorizacao.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule),
    canActivate:[autorizacaoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[autorizacaoGuard]
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule),
    canActivate:[autorizacaoGuard]
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function canActivate(reason: any): Routes | Type<any> | NgModuleFactory<any> | DefaultExport<Type<any>> | DefaultExport<Routes> | PromiseLike<Routes | Type<any> | NgModuleFactory<any> | DefaultExport<Type<any>> | DefaultExport<Routes>> {
  throw new Error('Function not implemented.');
}

//Senha:ADMBullet
//Email:ADM.algo@bullet.com