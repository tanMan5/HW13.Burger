# HW13.Burger

The homework assignment was to design an application, "Eat Da Burger", that allows for the user to add a burger or devour a burger.  This application was built with MySQL, Node, Express, Handlebars, and a ORM.


## Code Examples

The application is deployed at https://limitless-badlands-47193.herokuapp.com/.  Below is some examples of the code and how each snippet of code works.

![Heroku](/public/assets/img/appExample.gif)


### ORM


```
const orm = {
  all: function(tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
```

### Routes


```
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId });
    });
  });

```

### Views/Handlebars


```
 <ul>
        {{#each burgers}}
          {{#unless devoured}}
            {{> burgers/burger-block devoured=true}}
          {{/unless}}
        {{/each}}
      </ul>
    </td>
    <td>
      <ul>
        {{#each burgers}}
          {{#if devoured}}
            {{> burgers/burger-block devoured=false}}
          {{/if}}
        {{/each}}
      </ul>
```

```
<li>
	{{burger_name}}

	<button class="change-devoured" data-id="{{id}}" data-newdevoured="{{devoured}}">
		{{#if devoured}}Devour It!{{else}}Back on Menu{{/if}}
	</button>
</li>
```

## Portfolio

The application was also added to my portfolio.
https://tanman5.github.io/HW2.CSS-Bootstrap/portfolio.html

![Profile](/public/assets/img/profExample.gif)

