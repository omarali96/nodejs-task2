with javascript
1. write a function that will read a list of products from https://fakeapi.platzi.com/en/rest/products

2. Categorize the list products into a different buckets according to the product category 
write a function that add unique categories to a Set object 

3. Example

API response

```json
[
  {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
      {
    "id": 5,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
      {
    "id": 6,
    "category": {
      "id": 6,
      "name": "Test category",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
   // ... other product props
  }
  // ...
]
```

Transformed response

```json

[{
 "category": {
    "id": 5,
    "name": "Others"
 },
 "products": [{
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
      {
    "id": 5,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    }
    ]
},
{
 "category": {
    "id": 6,
    "name": "Test"
 },
 "products": [{
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
      {
    "id": 5,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    }]
},
{
    "category": {
        "id": 6,
        "name": "Test category"
    },
    "products": [
        "id": 5,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
      {
    "id": 6,
    "category": {
      "id": 6,
      "name": "Test category",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
      }
}
   // ... other product props
    ]
}]
```

4. Transform the prices from dollars to EGP using any Currency API (Your task is to search for a suitable one)
