# jdatastudio app

## 3 mins to build restful api base on your database

https://www.jdatastudio.com admin admin

![输入图片说明](https://gitee.com/dbrest/jdatastudio-app/blob/master/image/snapshort.png "在这里输入图片标题")
![snapshort](https://gitee.com/dbrest/jdatastudio-app/blob/master/image/snapshort.png)


![交流群](https://gitee.com/dbrest/jdatastudio-app/blob/master/image/image.png)

### api-doc

https://www.jdatastudio.com/swagger-ui.html

### apis
```
GET    /students
GET    /students/1
POST   /students
PUT    /students/1
```
### filter

```
GET /students?name=nick&grade=5
GET /students?id_in=1,2
```

### Paginate

```
GET /students?_start=0&_end=10
```

### Sort

```
GET /students?_order=ASC&_sort=score
```

### schema

```json
[
  {
    "id": "e1",
    "name": "users",
    "label": "Users",
    "fields": [
      {
        "name": "id",
        "label": "ID",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      },
      {
        "name": "name",
        "label": "Name",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      }
    ]
  },
  {
    "id": "e3",
    "name": "todos",
    "label": "Todos",
    "fields": [
      {
        "name": "id",
        "label": "ID",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "sortable": true
      },
      {
        "name": "title",
        "label": "title",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      },
      {
        "name": "completed",
        "label": "completed",
        "component": "Boolean",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      }
    ]
  },
  {
    "id": "e2",
    "name": "posts",
    "label": "Posts",
    "fields": [
      {
        "name": "id",
        "label": "ID",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "sortable": true
      },
      {
        "name": "title",
        "label": "title",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      },
      {
        "name": "userId",
        "label": "userId",
        "component": "Reference",
        "reference": "users",
        "referenceOptionText": "name",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      }
    ]
  }
]
```
