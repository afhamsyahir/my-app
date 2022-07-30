import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

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
    }
}