import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import fs from 'fs';

const app = express();
app.use(cors());


app.get('/', async (req, res) => {
  try {
    const i = +req.query.i;
    //console.log('i=', i);
    let out = ['1', '18', '243', '3240', '43254', '577368', '7706988', '102876480', '1373243544', '18330699168',
               '244686773808', '3266193870720', '43598688377184', '581975750199168', '7768485393179328',
               '103697388221736960', '1384201395738071424', '18476969736848122368', '246639261965462754048'];
    //console.log(i, ' - ', out[i]);
    res.status(200).send(out[i]);
  } catch (err) {
    console.log(err);
    return res.json({ err });
  }
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
