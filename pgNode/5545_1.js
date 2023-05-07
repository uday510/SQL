const client = require("./connection.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { application } = require("express");

app.use(bodyParser.json());
app.listen(4000, () => {
  console.log("5545 is now listening at port 4000");
});

app.get("/5545", (req, res) => {

  /**
   fetch the campaign details (by id)
   fetch leads details 
   then we sort the data 
  */
 
    const query = `SELECT l.lead_id, l.next_followup_date, l.lead_stage_id, l.tag_id, c.contact_name,
     cn.contact_number, c2.campaign_type,
    CASE 
        WHEN l.lead_status < 5 THEN 'OPEN'
        WHEN l.lead_status <= 6 THEN 'Follow-Up'
        WHEN l.lead_status <= 10 THEN 'Closed'  
    END
    FROM public.campaign_lead l
    JOIN public.contact c on l.contact_id = c.contact_id AND l.org_id = c.org_id 
    JOIN public.contact_number cn on l.contact_id = cn.contact_id AND cn.is_primary = true 
    AND l.org_id = cn.org_id
    JOIN public.campaign c2 on l.campaign_id = c2.campaign_id AND l.org_id = c2.org_id   
    WHERE l.campaign_id = '854eedc3-44cc-4fc0-aa8c-bcaaa4327ee6'
    ORDER BY l.date_disposed ASC NULLS FIRST, l.insertion_serial_id ASC`;
      client.query(query, (err, result) => {
    if (!err) {
        console.log(result);
      return res.status(200).send({ message: "OK", result: result.rows});
    }
    console.log("ERR", err);
    return res.status(500).send({ message: "Something went wrong", err});
  });
});

client.connect();