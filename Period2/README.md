# Period 2
## Node.js, Express + JavaScript Backend Testing and Express Security

### Relevant projects:
- [Mini Project](https://github.com/cph-an178/FullStack-JavaScript/tree/master/miniproject)
- [Express Exercise](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period2/Express_Exercise)

--- 
## Detailed Learning Goals:

### Express middleware
_**Middleware**_ functions are functions that have access to the request object `(req)`, the response object `(res)`, and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.
```javascript
var app = express();

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```