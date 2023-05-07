// const subQuery1 = `SELECT l.lead_id, l.next_followup_date, l.lead_stage_id, l.tag_id,
// c.contact_name, cn.contact_number
//   FROM public.campaign_lead l
//   JOIN public.contact c on l.contact_id = c.contact_id AND l.org_id = c.org_id
//   JOIN public.contact_number cn on l.contact_id = cn.contact_id AND cn.is_primary = true AND l.org_id = cn.org_id
// WHERE l.campaign_id = 'c71c55d9-4759-4ace-a5e3-1540d267e84e'`;
//   CASE 
    //     WHEN l.lead_status < 5 THEN 'OPEN'
    //     WHEN l.lead_status <= 6 THEN 'Follow-Up'
    //     WHEN l.lead_status <= 10 THEN 'Closed'  
    // END
//  const subQuery2 = `SELECT cmp.campaign_type FROM public.campaign cmp JOIN public.campaign_lead l on 
//    cmp.campaign_id = l.campaign_id AND cmp.org_id = l.org_id   
//     WHERE l.campaign_id = 'c71c55d9-4759-4ace-a5e3-1540d267e84e' AND (l.user_id = ${result.user_id}
//     OR l.user_id IS NULL) AND l.org_id = ${result[0].org_id}
//     AND l.lead_status < 7 AND l.deleted_at IS NULL
//     ORDER BY l.date_disposed ASC NULLS FIRST, l.insertion_serial_id
//     `;
//   client.query(subQuery2, (err2, res2) => {
//     console.log("LINE 66");
//     if (!err2) {
//       console.log(res2);
//       result.query2 = res2.rows[0];
//       return res.status(200).send({ message: "OK"});
//     }
//     console.log(err2);
//     return res.status(500).send({ message: "Something went wrong", err2 });
//   });

//     console.log("ROWS", res1.rows);
      // result.lead_id = res1.rows[0].lead_id;
      // result.next_followup_date = res1.rows[0].next_followup_date;
      // result.lead_stage_id = res1.rows[0].lead_stage_id;
      // result.tag_id = res1.rows[0].tag_id;
      // result.contact_name = res1.rows[0].contact_name;
      // result.contact_number = res1.rows[0].concatenate;
      // result.case = res1.rows[0].case;
      // result.campaign_id = res1.rows[0].campaign_id;
      // result.user_id = res1.rows[0].user_id;
      // result.org_id = res1.rows[0].org_id;
      // result.date_disposed = res1.rows[0].date_disposed;
      // result.insertion_serial_id = res1.rows[0].insertion_serial_id;
      // console.log("RESULT", result);
  //     result = res1.rows;
  //     return res.status(200).send(result);
  //   }

  // app.get("/type", (req, res) => {
//   const query = "SELECT campaign_type FROM public.campaign LIMIT 10";
//   client.query(query, (err, result) => {
//     if(!err) return res.status(200).send(result.rows);
//     console.log(err);
//     return res.status(500).send(err);
//   });
// });


app.get("/lead", (req, res) => {
  //   const user = req.body;
  //   let insertQuery = `insert into users(id, firstname, lastname, location)
  //                        values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;
  var result = {};
  console.log("Request is in progress...");
  const subQuery1 = `SELECT l.lead_id, l.next_followup_date, l.lead_stage_id, l.tag_id
    FROM public.campaign_lead l
	WHERE l.campaign_id = 'c71c55d9-4759-4ace-a5e3-1540d267e84e';`;
  client.query(subQuery1, (err1, res1) => {
    if (!err1) {
      console.log("LENGTH", res1.rows.length, res1);
      result = res1.rows;
      // return res.status(200).send(result);
    }
    console.log(err1);
    // return res.status(500).send({ message: "Something went wrong", err1});
  });
});