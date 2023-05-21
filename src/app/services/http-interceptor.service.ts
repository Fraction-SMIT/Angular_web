import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const started = Date.now();
    let ok: string;

    console.log('Interceptor');

    //      req.url = "http://localhost:3000/api/" +req.url;

    const newReq = req.clone({
      url: "http://localhost:3000/api/" + req.url,
      //  headers: req.headers.set('Authorization', '')
    });

    return next.handle(newReq)
      // .pipe(
      //   tap(
      //   result => {
      //     console.log("Success"+result);
      //   }, 
      //   error => {
      //     console.log("Error"+error);
      //   }
      //   )
      // );
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          // Operation failed; error is an HttpErrorResponse
          error: (error) => (ok = 'failed')
        }),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
           ${ok} in ${elapsed} ms.`;
          console.log("Message" + msg);
        })
      )


  }
}