var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.get("/", function(req, res) {
  res.send([
    {
      imgsrc: "onion.jpeg",
      discount: 20,
      name: "Onion/Vulligadda/Ullipaya",
      variants: [
        {
          wg: 250,
          price: 6.50
        },
        {
          wg: 500,
          price: 13
        },
        {
          wg: 750,
          price: 19.50

        },
        {
          wg: "1kg",
          price: 26
        }
      ]
    },
    {
      imgsrc: "tomato.jpeg",
      discount: 10,
      name: "Tomato - Local",
      variants: [
        {
          wg: 500,
          price: 23
        },
        {
          wg: 750,
          price: 34.5
        },
        {
          wg: "1kg",
          price: 46
        }
      ]
    },
    {
      imgsrc: "potato.jpeg",
      discount: 20,
      name: "Potato/Alugadda/Bangala/Dumpa/aloo",
      variants: [
        {
          wg: 250,
          price: 6
        }, 
        {
          wg: 500,
          price: 12
        },
        {
          wg: 750,
          price: 18
        },
        {
          wg: "1kg",
          price: 24
        }
      ]
    },
    {
      imgsrc: "ladiesfinger.jpeg",
      discount: 20,
      name: "Ladiesfinger/Bendakaya",
      variants: [
        {
          wg: 250,
          price: 10
        },
        {
          wg: 500,
          price: 20
        },
        {
          wg: 750,
          price: 30
        },
        {
          wg: "1kg",
          price: 20
        }
      ]
    }
  ]);
});

app.listen(3001);
