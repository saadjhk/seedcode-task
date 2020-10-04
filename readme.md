# Products and Categories APIs
## To seed the database
    npm run seed
## To create the build
    tsc
## To run the Application
    npm run dev or node build/index.js

## APIs
### Get Products
`GET /GetAllProducts`

    http://54.198.116.182:80/GetAllProducts/

### Query Params
    page: number

### Additional body Params
```json
{
    "Filters": {
        "Price": "5000-10000",
        "DiscountRate": "4",
        "Rating": ">5",
        "Categories": "5f6faf273a0c8037acd57ea2 (or)",
        "Categories": ["5f6faf273a0c8037acd57ea2 (or)"],
        "Categories": {
            "in": ["5f6faf273a0c8037acd57ea2"],
            "ex": ["5f6faf273a0c8037acd57ea3"]
        },
        "Brand": "Reynolds - Wyman (or)",
        "Brand": ["Reynolds - Wyman (or)"],
        "Brand": {
            "in": ["Reynolds - Wyman"],
            "ex": ["Keeling LLC"]
        },
        "ProductSpecificFields": {
            "key": "value"
        }
    },
    "OP": "and/or (only with filters)",
    "Select": {
        "_id": 0,
        "Name": 1,
        "Price": 1
    },
    "Sort": {
        "Name": "'1' or '-1'"
    }
}
```
### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 10761
    ETag: W/"2a09-5296Q1dFtAFWGw3jbfXYeb/ICn8"
    Date: Fri, 02 Oct 2020 04:02:06 GMT
    Connection: keep-alive
```json
{
  "status": "success",
  "data": [
    {
      "_id": "5f6faf273a0c8037acd57ea8",
      "Name": "Handcrafted Soft Car",
      "Description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "Price": 37292,
      "Rating": 3,
      "DiscountRate": 10,
      "Categories": [
        "5f6faf273a0c8037acd57ea2",
        "5f6faf273a0c8037acd57ea3"
      ],
      "ProductSpecificFields": {
        "Tasty": 92272,
        "Gorgeous": "Granite",
        "Ergonomic": "Fresh"
      },
      "Images": [
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/cats"
      ],
      "Color": "maroon",
      "Brand": "Keeling LLC"
    },
    {
      "_id": "5f6faf273a0c8037acd57ea9",
      "Name": "Fantastic Soft Bike",
      "Description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      "Price": 82853,
      "Rating": 0,
      "DiscountRate": 2,
      "Categories": [
        "5f6faf273a0c8037acd57ea4",
        "5f6faf273a0c8037acd57ea5"
      ],
      "ProductSpecificFields": {
        "Handmade": "Frozen",
        "Gorgeous": "Soft",
        "Incredible": 38336
      },
      "Images": [
        "http://placeimg.com/640/480/cats"
      ],
      "Color": "olive",
      "Brand": "Reynolds - Wyman"
    }
  ]
}
```
    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 46
    ETag: W/"2e-3y83xE2EWF9UGerdS3qJn30c55g"
    Date: Fri, 02 Oct 2020 04:08:26 GMT
    Connection: keep-alive

```json
{
  "status": "error",
  "message": "Invalid Request"
}
```


### Get Product
`GET /Product/:ProductId`

    http://54.198.116.182:80/Product/5f6faf273a0c8037acd57ea8

### URL Params
    ProductId: string

### Additional body Params
```json
{
    "Select": {
        "_id": 0,
        "Name": 1,
        "Price": 1
    }
}
```
### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 10761
    ETag: W/"2a09-5296Q1dFtAFWGw3jbfXYeb/ICn8"
    Date: Fri, 02 Oct 2020 04:02:06 GMT
    Connection: keep-alive
```json
{
  "status": "success",
  "data": {
    "_id": "5f6faf273a0c8037acd57ea8",
    "Name": "Handcrafted Soft Car",
    "Description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "Price": 37292,
    "Rating": 3,
    "DiscountRate": 10,
    "Categories": [
      "5f6faf273a0c8037acd57ea2",
      "5f6faf273a0c8037acd57ea3"
    ],
    "ProductSpecificFields": {
      "Tasty": 92272,
      "Gorgeous": "Granite",
      "Ergonomic": "Fresh"
    },
    "Images": [
      "http://placeimg.com/640/480/cats",
      "http://placeimg.com/640/480/cats",
      "http://placeimg.com/640/480/cats",
      "http://placeimg.com/640/480/cats"
    ],
    "Color": "maroon",
    "Brand": "Keeling LLC"
  }
}
```
    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 46
    ETag: W/"2e-3y83xE2EWF9UGerdS3qJn30c55g"
    Date: Fri, 02 Oct 2020 04:08:26 GMT
    Connection: keep-alive

```json
{
  "status": "error",
  "message": "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
}
```

### Search Product
`GET /SearchProducts`

    http://54.198.116.182:80/SearchProducts?key=small%20metal%20bike&page=1

### Query Params
    page: number
    key: string

### Additional body Params
```json
{
    "Filters": {
        "Price": "5000-10000",
        "DiscountRate": "4",
        "Rating": ">5",
        "Categories": "5f6faf273a0c8037acd57ea2 (or)",
        "Categories": ["5f6faf273a0c8037acd57ea2 (or)"],
        "Categories": {
            "in": ["5f6faf273a0c8037acd57ea2"],
            "ex": ["5f6faf273a0c8037acd57ea3"]
        },
        "Brand": "Reynolds - Wyman (or)",
        "Brand": ["Reynolds - Wyman (or)"],
        "Brand": {
            "in": ["Reynolds - Wyman"],
            "ex": ["Keeling LLC"]
        },
        "ProductSpecificFields": {
            "key": "value"
        }
    },
    "OP": "and/or (only with filters)",
    "Select": {
        "_id": 0,
        "Name": 1,
        "Price": 1
    },
    "Sort": {
        "Name": "'1' or '-1'"
    }
}
```
### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 10761
    ETag: W/"2a09-5296Q1dFtAFWGw3jbfXYeb/ICn8"
    Date: Fri, 02 Oct 2020 04:02:06 GMT
    Connection: keep-alive
```json
{
    "status": "success",
    "data": [
        {
            "_id": "5f6f5d8a788b3b2ee8fc4075",
            "Name": "Small Metal Bike",
            "Description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
            "Price": 55582,
            "Rating": 3,
            "DiscountRate": 3,
            "Categories": [
                "5f6f5d8a788b3b2ee8fc4051"
            ],
            "ProductSpecificFields": {
                "Generic": "Granite"
            },
            "Images": [
                "http://placeimg.com/640/480/cats",
                "http://placeimg.com/640/480/cats",
                "http://placeimg.com/640/480/cats",
                "http://placeimg.com/640/480/cats",
                "http://placeimg.com/640/480/cats"
            ],
            "Color": "teal",
            "Brand": "Mayer - Ziemann"
        }
    ]
}
```
    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 46
    ETag: W/"2e-3y83xE2EWF9UGerdS3qJn30c55g"
    Date: Fri, 02 Oct 2020 04:08:26 GMT
    Connection: keep-alive

```json
{
  "status": "error",
  "message": "Something went wrong"
}
```

### Add Product
`POST /Product`

    http://54.198.116.182:80/Product

### Body Param
```json
{
  "Product": {
    "Price": 500010,
    "DiscountRate": 4,
    "Rating": 4,
    "Categories": ["5f6faf273a0c8037acd57ea2", "5f6faf273a0c8037acd57ea3"],
    "Brand": "Reynolds - Wyman",
    "Images": [
      "https://www.google.com/exampleimage.png",
      "https://www.google.com/exampleimage.png"
    ],
    "Color": "green",
    "Name": "Green Bike",
    "Description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
    "ProductSpecificFields": {
      "Engine": 800,
      "Wheels": 2
    }
  }
}
```
### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 10761
    ETag: W/"2a09-5296Q1dFtAFWGw3jbfXYeb/ICn8"
    Date: Fri, 02 Oct 2020 04:02:06 GMT
    Connection: keep-alive
```json
{
    "status": "success",
    "data": {
        "Price": 500010,
        "DiscountRate": 4,
        "Rating": 4,
        "Categories": [
            "5f6faf273a0c8037acd57ea2",
            "5f6faf273a0c8037acd57ea3"
        ],
        "Brand": "Reynolds - Wyman",
        "Images": [
            "https://www.google.com/exampleimage.png",
            "https://www.google.com/exampleimage.png"
        ],
        "Color": "green",
        "Name": "Green Bike",
        "Description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        "ProductSpecificFields": {
            "Engine": 800,
            "Wheels": 2
        },
        "_id": "5f79e0deb152c42ad8e22336"
    }
}
```
    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 46
    ETag: W/"2e-3y83xE2EWF9UGerdS3qJn30c55g"
    Date: Fri, 02 Oct 2020 04:08:26 GMT
    Connection: keep-alive

```json
{
    "status": "error",
    "message": "\"Poo\" is not allowed"
}
```

### Update Product
`PUT /Product`

    http://54.198.116.182:80/Product/:ProductId
  
### URL Param

    ProductId: string

### Body Param
```json
{
  "Product": {
    "Images": [
      "https://www.google.com/exampleimage.png",
      "https://www.google.com/exampleimage.png",
      "https://www.google.com/exampleimage.png"
    ]
  }
}
```
### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 10761
    ETag: W/"2a09-5296Q1dFtAFWGw3jbfXYeb/ICn8"
    Date: Fri, 02 Oct 2020 04:02:06 GMT
    Connection: keep-alive
```json
{
    "status": "success",
    "message": "Product Updated."
}
```
    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 46
    ETag: W/"2e-3y83xE2EWF9UGerdS3qJn30c55g"
    Date: Fri, 02 Oct 2020 04:08:26 GMT
    Connection: keep-alive

```json
{
    "status": "error",
    "message": "\"Poo\" is not allowed"
}
```