import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

        const access_token = this.authService.getAccessToken();
            req = req.clone({
                setHeaders:{
                    'Authorization': `Bearer ${access_token}`
                },
            });
            return next.handle(req)

        // const accessToken = this.authService.getAccessToken();
        // req = req.clone({
        //     setHeaders: {
        //         'Content-Type' : 'application/json',
        //         'Authorization': `Bearer ${accessToken}}` 
        //     }
        // });
        // return next.handle(req);
    }
}