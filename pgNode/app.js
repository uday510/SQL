const client = require("./connection.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { application } = require("express");
const lodash = require("lodash");

app.use(bodyParser.json());
app.listen(4000, () => {
  console.log("Sever is now listening at port 4000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/campaignleads", (req, res) => {
  let result1;
  const subQuery1 = `SELECT l.lead_id, l.next_followup_date, 
  l.lead_stage_id, l.tag_id, c.contact_name
  FROM public.campaign_lead l
    JOIN public.contact c on l.contact_id = c.contact_id AND l.org_id = c.org_id 
    WHERE l.campaign_id = '854eedc3-44cc-4fc0-aa8c-bcaaa4327ee6'
    ORDER BY l.date_disposed ASC NULLS FIRST, l.insertion_serial_id ASC LIMIT 10`;
  // (l.user_id = '71503f05-2dd0-4090-b3b9-25ef379b5dfe' OR l.user_id IS NULL)
  // AND l.org_id = '3ebabc14-1f54-462a-a233-a521008bedb8'
  // AND l.lead_status < 7 AND l.deleted_at IS NULL
  // ORDER BY l.date_disposed ASC NULLS FIRST, l.insertion_serial_id ASC;`;

  client.query(subQuery1, (err1, res1) => {
    if (!err1) {
      // console.log(res1);
      result1 = res1.rows;
      // console.log("RESULT1:", result1);
      // return res.status(200).send({ message: "OK", result: result1 });
    }
    // console.log("ERR1", err1);
    // return res.status(500).send({ message: "Something went wrong", err1 });
  });
  const subQuery2 = `SELECT c2.campaign_type,
    CASE 
        WHEN l.lead_status < 5 THEN 'OPEN'
        WHEN l.lead_status <= 6 THEN 'Follow-Up'
        WHEN l.lead_status <= 10 THEN 'Closed'  
    END 
    FROM public.campaign_lead l
    JOIN public.campaign c2 on l.campaign_id = c2.campaign_id AND l.org_id = c2.org_id   
    WHERE l.campaign_id = '854eedc3-44cc-4fc0-aa8c-bcaaa4327ee6'`;
  // WHERE l.campaign_id = $1 AND (l.user_id = $3 OR l.user_id IS NULL)
  // AND l.org_id = $2 AND l.lead_status < 7 AND l.deleted_at IS NULL`;
  client.query(subQuery2, (err2, res2) => {
     if (!err2) {
      // console.log("RESULT 2", res2);
      const result = [];
      const result2 = res2.rows;
      result1.forEach((lead1, index) => {
        const lead2 = result2[index];
        console.log(Object.assign(lead1, lead2));
        result.push(Object.assign(lead1, lead2));
        // result[result.length] = Object.assign(lead1, lead2);
      });
      // console.log("RESULT: " + result[0]);
      return res.status(200).send({ message: "OK", result: data});
    }
    console.log("ERR2", err2);
    return res.status(500).send({ message: "Something went wrong", err2 });
  });
});

app.get('/data', (req, res) => {
  const query = `SELECT * FROM user_lead_call lIMIT 100;`
  client.query(query, (error, result) => {
    if (!error) {
      // console.log("RESULT: " + result[0]);
      const data = lodash.orderBy(result.rows, ["date_call"], ["asc"]);
      return res.status(200).send({ message: "OK", result: data });
    }
    console.log(error);
    return res.status(500).send({ message: "Something went wrong", error });
  });
})
client.connect();
