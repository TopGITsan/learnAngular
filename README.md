# LearnAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Learn Angular 
## version 6

>How to create small/medium/large applications with Angular 6 in this web development tutorial.


1.  Introduction
2.  Setting up project using Angular CLI
3.  Angular Architecture
4.  Decorators
5.  Lifecycle Hooks
6.  Components
7.  Interpolation and Expressions
8.  One way data binding
9.  Two way data binding
10.  Looping with *ngFor
11.  Services
12.  HTTP Requests
13.  Configure Proxy for API calls
14.  Routing
15.  Login App - Part 1
16.  Login App Part 2
17.  Routing Protection (Login App Part 3)
18.  Setting up backend (Login App Part 4)
19.  Persistent Login Session (Login App Part 5)
20.  Adding Logout feature and UI (Login App Part 6)
21.  MongoDB + Angular + Node Registration
22.  NodeJS Setup (Registration Part 2)
23.  MongoDB Setup (Registration Part 3)
24.  Linking MongoDB with Angular (Registration Part 4)
25.  Sessions
26.  Editing and storing data in MongoDB through Angular
27.  Pipes
28.  Custom Pipes
29.  Directives
30.  Custom Directives
31.  Redux - Introduction
32.  Redux - Getting Started
33.  Creating a Reducer
34.  Registering a reducer
35.  Getting Data from Redux Store

### [freeCodeCamp youtube video](https//github.com/mehulmpt/angular6-youtube﻿)


#### Lesson 1: Arhitecture overview
 - File structure
    - e2e is for testing
    - src (source folder)
        - app (folder) has a css file , html file, ts file with a decorator, and a module file ( a module is a way to split your code to some independent files)
        - main.ts is the entry point, initializes the angular project, bootstrap the application; (flow: main.ts is the main file which bootstraps the module which  bootstraps our components (a component has a decorator) which runs the html file through the template url and includes styles and acts on the selector [in our case <app-root> from our index.html file]).
        - index.html has <app-root></app-root> which gives angular a place to start working
        - polyfills - if the browser doesn't support a particular functionality then polyfill will mimic that particular functionality
        - styles.css - is the global style sheet file
 - Entry point of application
 - Bootstrapping
 - Modules
 - Decorators
 - and some!

 #### Lesson 2: Decorators introduction
 - What is a *decorator* - helps to wrap some function or a class inside another function
 - How it wraps code
 - Makes code easy to read and maintain

 #### Types of decorators
 - Class Decorators
 - Member Decorators
 _the decorator has to be followed by the class you can't have anything in between_

 #### Lesson 3: Lifecycle Hooks
 - OnChanges - if you change some input property this fill be fired
 - OnInit - fired when the component is initialised, it's called only once for component, ideal if you retrive some data from some REST API (perform an HTTP req)
 - DoCheck - fired when angular thinks there is a change, something has changed

 - AfterContentInit
 - AfterContentChecked
 - AfterViewInit
 - AfterViewChecked
 - OnDestroy


 #### Lesson 4: Components
 - What is a component - _a piece of code which represents something on your screen_. it's an independent thing which you can import an use it;
 - Creating component using: ng generate component hello
 - Declaring a component
 - Basic component use


 #### Lessong 5: Interpolation and Expressions
 - What is interpolation
 - Its symbol {{}}
 - Expressions used in interpolation
 - Prohibited expression syntax examples - _do not use functions in your html interpolations_, *use only property names*

 #### Lesson 6: Data Binding
 - What is data binding
 - Source to target -> []
 - Target to source -> ()
 - Two way data binding
    - Meaning of two way data binding
    - Example of two way data binding
    - ngModel directive


 #### Lesson 7: *ngFor
 - Where to use: _ngFor is a directive that you can use in your Angular templates to loop through lists and arrays of data in order to display it._
 - Syntax
 - Getting index
 - Getting odd/even
 - Getting first element/last element


 #### Lesson 8: Services
 - What are Services? _are substitutable objects that are wired together using dependency injection (DI)._ or a single instance of a file which can be injected in multiple components
 - Why Services? _because you do not want your component to ex: call REST API, that what are services for_ that is what angular styling guides suggest
 - Creating a service using command line: ng generate service [name]
 - @Injectable decorator
 - Injecting service in a component

 #### Lesson 9: HTTP Requests
 - What is HTTP Client
 - Creating a service for making HTTP Requests
 - Getting response back
 - Casting response to interface
 - RxJS

 #### Lesson 10: Proxy Configuration 
 <!-- for development purposes -->
 <!-- now -->
 | Angular 4200 | --> makes an API call --> | API Server https://*glitch.com/api/exercise/users |
 <!-- after -->
 | Angular 4200 | --> makes an API call to /api/exercise/users --> webpack dev server --> | API Server https://*glitch.com/api/exercise/users |
 - create proxyconfig.json { "/route" : { "target: ..."}}
 - change the package.json{ scripts.start } :
> ng serve --proxy-config proxyconfig.json
 - change the url in the service with the /route
 - run npm start

 #### Lesson 11: Routing
 - What is Routing?
   - displaying different content and different pages
   - need routing for displaying large amount of content in chunks on the website, or for creating special authorized access-only pages.
 - Why Routing?
 - Implementing Router Module fron @angular/router
 - Adding Routes



### Login App
- App Comonents
      - Login Component
      - Admin Component
- Backend Validation
- Routing
- Route protection
