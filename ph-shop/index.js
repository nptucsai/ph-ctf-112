const express = require('express');
const cookies = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const productions = require('./productions.json');
const jwt_secret = 'Zuh8VAi1p4Uy65jEV08pP8LKZMkCMB';
const FLAG = process.env.FLAG || 10000000000;

productions.find((x) => x.id === 'i1228').$ += `___${FLAG}___`;

app.use(cookies());
app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  const token = req.cookies.money;

  try {
    const { money } = jwt.verify(token, jwt_secret);
    res.render('index', { money, productions });
  } catch (_) {
    const token = jwt.sign({ money: 65536, items: [] }, jwt_secret);
    res.cookie('money', token);
    res.render('index', { money: 65536, items: [], productions });
  }
});
app.get('/history', function (req, res) {
  const token = req.cookies.money;
  try {
    const { money, items } = jwt.verify(token, jwt_secret);
    res.render('history', { money, items });
  } catch (_) {
    res.redirect('/');
  }
});
app.post('/buy', function (req, res) {
  const { id, money } = req.body;
  const token = req.cookies.money;

  try {
    const payload = jwt.verify(token, jwt_secret);
    const production = productions.find((x) => x.id === id);
    if (!production) throw null;

    if (money < production.price) return res.status(400).send('錢錢不夠喔！！');

    payload.money = payload.money - production.price;
    payload.items.push(production);

    const _token = jwt.sign(payload, jwt_secret);
    res.cookie('money', _token);

    return res.send({
      status: 'success',
      item: production,
      money: payload.money
    });
  } catch (err) {
    console.log(err);
    const token = jwt.sign({ money: 65536, items: [] }, jwt_secret);
    res.cookie('money', token);
    res.status(400).send('你在幹嘛！！');
  }
});

app.listen(3000, () => console.log('Service on port 3000...'));
