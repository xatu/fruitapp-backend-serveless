# fruitapp-backend-serveless

Demo AWS lambda serveless application to make CRUD operations and upload images into S3 and DynamoDB. 

![Untitled Diagram](https://user-images.githubusercontent.com/6520725/61395002-67b33480-a892-11e9-94cc-a89549cc202f.png)

## Setup

```
npm install
```

## Deploy

```
serverless deploy
```

## Usage

### Create fruit
```
curl -XPOST -H "Content-type: application/json" -d '{
  "name" : "apple",
  "description" : "An apple a day, keep the doctor away",
  "price" : "199.99"
}' 'https://<<apit-url-aws>>/fruits'
```

### List all fruits
```
curl 'https://<<apit-url-aws>>/fruits'
```

### Get one fruit
```
curl 'https://<<apit-url-aws>>/fruits/1'
```

### Delete one fruit
```
curl -XDELETE 'https://<<apit-url-aws>>/fruits/1'

```

### Update one fruit
```
curl -XPUT -H "Content-type: application/json" -d '{  
  "name" : "apple",
  "description" : "An apple a day, keep the doctor away",
  "price" : "199.99"
}' 'https://<<apit-url-aws>>/fruits/1'
```

### Upload image of one fruit
```
curl -XPOST -T Local/path/apple.jpg https://<<apit-url-aws>>/uploadimage
```
