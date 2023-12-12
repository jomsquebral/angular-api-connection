# Angular Api Connection

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

# Output
![screenshot](https://github.com/jomsquebral/angular-api-connection/assets/13448557/4204582f-2c32-4b8a-a3eb-7ec07a8c0793)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Connection to API
```
  header = new HttpHeaders({
    "x-rapidapi-host" : "movies-api14.p.rapidapi.com",
    "x-rapidapi-key" : "033f789094msh481735d1ed57eb6p19ddf3jsn2d23a8b3b157"
  });

  url = "https://movies-api14.p.rapidapi.com/shows";

  constructor(private http : HttpClient) {}
    getshowlist(){
      return this.http.get(this.url, {headers : this.header})
  }

