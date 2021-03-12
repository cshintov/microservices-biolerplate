conn = new Mongo();
db = conn.getDB("patins");
db.master.insertOne( { policy: { pid: 7728, provider: "3-101-675402 S.A", plan: "HL Premium", dateFrom: "19/05/2020", policyNo: 123456987, city: "Cochin", country: "India", address: "ZH Healthcare", zip: 680025}});