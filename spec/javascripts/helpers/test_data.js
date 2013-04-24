(function() {
  this.test_data || (this.test_data = {});

  this.test_data.wv_query_response = "{\"aggregation\":\"Rpm::WorkQueueActivity\",\"slicer\":[\"dimension::context_date::key::eq::'2011-05-02'\",\"dimension::context_date::key::gt::'2011-05-02'\"],\"filters\":[\"dimension::context_date::key::eq::'2011-05-02'\"],\"totals\":{\"measures\":[{\"name\":\"completed\",\"formatted_value\":\"0\",\"value\":0},{\"name\":\"count\",\"formatted_value\":\"1\",\"value\":1},{\"name\":\"incoming\",\"formatted_value\":\"0\",\"value\":0},{\"name\":\"outgoing\",\"formatted_value\":\"0\",\"value\":0},{\"name\":\"overdue\",\"formatted_value\":\"1\",\"value\":1}],\"dimensions\":[],\"key\":[]},\"axes\":[{\"start_index\":0,\"dimensions\":[{\"name\":\"context_date\",\"members\":[{\"key\":\"2011-05-02\"}]}],\"end_index\":0}],\"measure_names\":[\"count\",\"incoming\",\"outgoing\",\"completed\",\"overdue\"],\"cells\":[{\"measures\":[{\"name\":\"completed\",\"formatted_value\":\"0\",\"value\":0},{\"name\":\"count\",\"formatted_value\":\"1\",\"value\":1},{\"name\":\"incoming\",\"formatted_value\":\"0\",\"value\":0},{\"name\":\"outgoing\",\"formatted_value\":\"0\",\"value\":0},{\"name\":\"overdue\",\"formatted_value\":\"1\",\"value\":1}],\"dimensions\":[\"context_date\"],\"key\":[\"2011-05-02\"]}]}";

  this.test_data.wv_query_response2 = "{\"cells\":[{\"key\":[\"Air Med\",\"30 day\",\"2012-01-01\"],\"measures\":[{\"name\":\"30d_rate\",\"value\":0.058904737005315816}]},{\"key\":[\"Verihealth, Inc.\",\"30 day\",\"2012-01-01\"],\"measures\":[{\"name\":\"30d_rate\",\"value\":0.1149703444986617}]},{\"key\":[\"REACH\",\"30 day\",\"2012-01-01\"],\"measures\":[{\"name\":\"30d_rate\",\"value\":0.09643900382569176}]},{\"key\":[\"Lake County Fire Dist.\",\"30 day\",\"2012-01-01\"],\"measures\":[{\"name\":\"30d_rate\",\"value\":0.15164745430542892}]},{\"key\":[\"CareFlight\",\"30 day\",\"2012-01-01\"],\"measures\":[{\"name\":\"30d_rate\",\"value\":0.09773190004922937}]},{\"key\":[\"Sierra LifeFlight\",\"30 day\",\"2012-01-01\"],\"measures\":[{\"name\":\"30d_rate\",\"value\":0.06304682146329026}]},{\"key\":[\"Low Volume\",\"30 day\",\"2012-01-01\"],\"measures\":[{\"name\":\"30d_rate\",\"value\":0.04378631047073087}]}],\"cube\":\"payspeed\",\"axes\":[{\"dimensions\":[{\"name\":\"customer\",\"members\":[{\"key\":\"Air Med\",\"caption\":\"Air Med\",\"sort\":\"Air Med\"},{\"key\":\"Verihealth, Inc.\",\"caption\":\"Verihealth, Inc.\",\"sort\":\"Verihealth, Inc.\"},{\"key\":\"REACH\",\"caption\":\"REACH\",\"sort\":\"REACH\"},{\"key\":\"Lake County Fire Dist.\",\"caption\":\"Lake County Fire Dist.\",\"sort\":\"Lake County Fire Dist.\"},{\"key\":\"Cal-Ore\",\"caption\":\"Cal-Ore\",\"sort\":\"Cal-Ore\"},{\"key\":\"Sacramento Valley Ambulance\",\"caption\":\"Sacramento Valley Ambulance\",\"sort\":\"Sacramento Valley Ambulance\"},{\"key\":\"Kelseyville\",\"caption\":\"Kelseyville\",\"sort\":\"Kelseyville\"},{\"key\":\"CareFlight\",\"caption\":\"CareFlight\",\"sort\":\"CareFlight\"},{\"key\":\"Verihealth SC\",\"caption\":\"Verihealth SC\",\"sort\":\"Verihealth SC\"},{\"key\":\"Sierra LifeFlight\",\"caption\":\"Sierra LifeFlight\",\"sort\":\"Sierra LifeFlight\"},{\"key\":\"Air Angels\",\"caption\":\"Air Angels\",\"sort\":\"Air Angels\"},{\"key\":\"Low Volume\",\"caption\":\"Low Volume\",\"sort\":\"Low Volume\"}]}]},{\"dimensions\":[{\"name\":\"window_size\",\"members\":[{\"key\":\"30 day\",\"caption\":\"30 day\",\"sort\":\"30 day\"}]},{\"name\":\"date\",\"members\":[{\"key\":\"2012-01-01\",\"caption\":\"2012-01-01\",\"sort\":\"2012-01-01\"}]}]}],\"aggregation\":\"payspeed\",\"filters\":[\"dimension::date::key::eq::2012-01-01\",\"dimension::date::key::lt::2012-02-01\",\"dimension::window_size::key::eq::30 day\"],\"measure_names\":[\"30d_rate\"]}";

  this.test_data.wv_query_data = {
    "axes": [
      {
        "dimensions": [
          {
            "name": "division",
            "members": [
              {
                "key": "503d63c20c7dea4edc00000d",
                "caption": "Air"
              }, {
                "key": "503d64820c7dea4edc000076",
                "caption": "Ground 1"
              }, {
                "key": "503d648e0c7dea4edc0001e6",
                "caption": "Ground 2"
              }, {
                "key": "Unknown"
              }
            ]
          }, {
            "name": "snapshot_date",
            "members": [
              {
                "key": "20130402",
                "caption": "4/2/13      "
              }, {
                "key": "20130403",
                "caption": "4/3/13      "
              }, {
                "key": "20130404",
                "caption": "4/4/13      "
              }, {
                "key": "20130405",
                "caption": "4/5/13      "
              }, {
                "key": "20130406",
                "caption": "4/6/13      "
              }, {
                "key": "20130407",
                "caption": "4/7/13      "
              }, {
                "key": "20130408",
                "caption": "4/8/13      "
              }, {
                "key": "20130409",
                "caption": "4/9/13      "
              }, {
                "key": "20130410",
                "caption": "4/10/13     "
              }, {
                "key": "20130411",
                "caption": "4/11/13     "
              }, {
                "key": "20130412",
                "caption": "4/12/13     "
              }, {
                "key": "20130413",
                "caption": "4/13/13     "
              }, {
                "key": "20130414",
                "caption": "4/14/13     "
              }, {
                "key": "20130415",
                "caption": "4/15/13     "
              }, {
                "key": "20130416",
                "caption": "4/16/13     "
              }, {
                "key": "20130417",
                "caption": "4/17/13     "
              }, {
                "key": "20130418",
                "caption": "4/18/13     "
              }, {
                "key": "20130419",
                "caption": "4/19/13     "
              }, {
                "key": "20130420",
                "caption": "4/20/13     "
              }, {
                "key": "20130421",
                "caption": "4/21/13     "
              }, {
                "key": "20130422",
                "caption": "4/22/13     "
              }, {
                "key": "20130423",
                "caption": "4/23/13     "
              }, {
                "key": "20130424",
                "caption": "4/24/13     "
              }
            ]
          }
        ]
      }, {
        "dimensions": [
          {
            "name": "work_queue_team",
            "members": [
              {
                "key": "Unknown"
              }, {
                "key": "PSP/IV"
              }, {
                "key": "Commercial/Other"
              }, {
                "key": "CMS/Patient"
              }, {
                "key": "Supervisors"
              }, {
                "key": "Claim Submission"
              }
            ]
          }
        ]
      }
    ],
    "cells": [
      {
        "key": ["503d63c20c7dea4edc00000d", "20130402", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "145",
            "formatted_value": "145"
          }, {
            "name": "incoming",
            "value": "361",
            "formatted_value": "361"
          }, {
            "name": "outgoing",
            "value": "350",
            "formatted_value": "350"
          }, {
            "name": "open",
            "value": "272",
            "formatted_value": "272"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130402", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "97",
            "formatted_value": "97"
          }, {
            "name": "incoming",
            "value": "259",
            "formatted_value": "259"
          }, {
            "name": "outgoing",
            "value": "265",
            "formatted_value": "265"
          }, {
            "name": "open",
            "value": "570",
            "formatted_value": "570"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130402", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "76",
            "formatted_value": "76"
          }, {
            "name": "incoming",
            "value": "227",
            "formatted_value": "227"
          }, {
            "name": "outgoing",
            "value": "195",
            "formatted_value": "195"
          }, {
            "name": "open",
            "value": "253",
            "formatted_value": "253"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130402", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "incoming",
            "value": "193",
            "formatted_value": "193"
          }, {
            "name": "outgoing",
            "value": "179",
            "formatted_value": "179"
          }, {
            "name": "open",
            "value": "90",
            "formatted_value": "90"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130402", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "outgoing",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "open",
            "value": "21",
            "formatted_value": "21"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130402", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "619",
            "formatted_value": "619"
          }, {
            "name": "outgoing",
            "value": "619",
            "formatted_value": "619"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130403", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "180",
            "formatted_value": "180"
          }, {
            "name": "incoming",
            "value": "496",
            "formatted_value": "496"
          }, {
            "name": "outgoing",
            "value": "531",
            "formatted_value": "531"
          }, {
            "name": "open",
            "value": "237",
            "formatted_value": "237"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130403", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "92",
            "formatted_value": "92"
          }, {
            "name": "incoming",
            "value": "211",
            "formatted_value": "211"
          }, {
            "name": "outgoing",
            "value": "188",
            "formatted_value": "188"
          }, {
            "name": "open",
            "value": "593",
            "formatted_value": "593"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130403", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "80",
            "formatted_value": "80"
          }, {
            "name": "incoming",
            "value": "211",
            "formatted_value": "211"
          }, {
            "name": "outgoing",
            "value": "213",
            "formatted_value": "213"
          }, {
            "name": "open",
            "value": "251",
            "formatted_value": "251"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130403", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "incoming",
            "value": "261",
            "formatted_value": "261"
          }, {
            "name": "outgoing",
            "value": "274",
            "formatted_value": "274"
          }, {
            "name": "open",
            "value": "77",
            "formatted_value": "77"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130403", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "13",
            "formatted_value": "13"
          }, {
            "name": "incoming",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "outgoing",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "open",
            "value": "22",
            "formatted_value": "22"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130403", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "incoming",
            "value": "318",
            "formatted_value": "318"
          }, {
            "name": "outgoing",
            "value": "318",
            "formatted_value": "318"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130404", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "163",
            "formatted_value": "163"
          }, {
            "name": "incoming",
            "value": "549",
            "formatted_value": "549"
          }, {
            "name": "outgoing",
            "value": "505",
            "formatted_value": "505"
          }, {
            "name": "open",
            "value": "281",
            "formatted_value": "281"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130404", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "82",
            "formatted_value": "82"
          }, {
            "name": "incoming",
            "value": "136",
            "formatted_value": "136"
          }, {
            "name": "outgoing",
            "value": "134",
            "formatted_value": "134"
          }, {
            "name": "open",
            "value": "595",
            "formatted_value": "595"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130404", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "69",
            "formatted_value": "69"
          }, {
            "name": "incoming",
            "value": "188",
            "formatted_value": "188"
          }, {
            "name": "outgoing",
            "value": "217",
            "formatted_value": "217"
          }, {
            "name": "open",
            "value": "222",
            "formatted_value": "222"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130404", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "incoming",
            "value": "310",
            "formatted_value": "310"
          }, {
            "name": "outgoing",
            "value": "300",
            "formatted_value": "300"
          }, {
            "name": "open",
            "value": "87",
            "formatted_value": "87"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130404", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "outgoing",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "open",
            "value": "22",
            "formatted_value": "22"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130404", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "38",
            "formatted_value": "38"
          }, {
            "name": "incoming",
            "value": "467",
            "formatted_value": "467"
          }, {
            "name": "outgoing",
            "value": "466",
            "formatted_value": "466"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130405", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "121",
            "formatted_value": "121"
          }, {
            "name": "incoming",
            "value": "232",
            "formatted_value": "232"
          }, {
            "name": "outgoing",
            "value": "208",
            "formatted_value": "208"
          }, {
            "name": "open",
            "value": "305",
            "formatted_value": "305"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130405", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "79",
            "formatted_value": "79"
          }, {
            "name": "incoming",
            "value": "234",
            "formatted_value": "234"
          }, {
            "name": "outgoing",
            "value": "239",
            "formatted_value": "239"
          }, {
            "name": "open",
            "value": "590",
            "formatted_value": "590"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130405", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "82",
            "formatted_value": "82"
          }, {
            "name": "incoming",
            "value": "285",
            "formatted_value": "285"
          }, {
            "name": "outgoing",
            "value": "314",
            "formatted_value": "314"
          }, {
            "name": "open",
            "value": "193",
            "formatted_value": "193"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130405", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "89",
            "formatted_value": "89"
          }, {
            "name": "outgoing",
            "value": "31",
            "formatted_value": "31"
          }, {
            "name": "open",
            "value": "145",
            "formatted_value": "145"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130405", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "outgoing",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "open",
            "value": "22",
            "formatted_value": "22"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130405", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "incoming",
            "value": "133",
            "formatted_value": "133"
          }, {
            "name": "outgoing",
            "value": "134",
            "formatted_value": "134"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130406", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "72",
            "formatted_value": "72"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "305",
            "formatted_value": "305"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130406", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "56",
            "formatted_value": "56"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "open",
            "value": "589",
            "formatted_value": "589"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130406", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "49",
            "formatted_value": "49"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "193",
            "formatted_value": "193"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130406", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "145",
            "formatted_value": "145"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130406", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "22",
            "formatted_value": "22"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130406", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130407", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "73",
            "formatted_value": "73"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "305",
            "formatted_value": "305"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130407", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "56",
            "formatted_value": "56"
          }, {
            "name": "incoming",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "outgoing",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "open",
            "value": "589",
            "formatted_value": "589"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130407", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "53",
            "formatted_value": "53"
          }, {
            "name": "incoming",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "outgoing",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "open",
            "value": "193",
            "formatted_value": "193"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130407", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "145",
            "formatted_value": "145"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130407", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "22",
            "formatted_value": "22"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130407", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "incoming",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130408", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "121",
            "formatted_value": "121"
          }, {
            "name": "incoming",
            "value": "255",
            "formatted_value": "255"
          }, {
            "name": "outgoing",
            "value": "300",
            "formatted_value": "300"
          }, {
            "name": "open",
            "value": "260",
            "formatted_value": "260"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130408", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "84",
            "formatted_value": "84"
          }, {
            "name": "incoming",
            "value": "267",
            "formatted_value": "267"
          }, {
            "name": "outgoing",
            "value": "177",
            "formatted_value": "177"
          }, {
            "name": "open",
            "value": "679",
            "formatted_value": "679"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130408", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "79",
            "formatted_value": "79"
          }, {
            "name": "incoming",
            "value": "250",
            "formatted_value": "250"
          }, {
            "name": "outgoing",
            "value": "225",
            "formatted_value": "225"
          }, {
            "name": "open",
            "value": "218",
            "formatted_value": "218"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130408", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "incoming",
            "value": "138",
            "formatted_value": "138"
          }, {
            "name": "outgoing",
            "value": "159",
            "formatted_value": "159"
          }, {
            "name": "open",
            "value": "124",
            "formatted_value": "124"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130408", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "incoming",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "outgoing",
            "value": "35",
            "formatted_value": "35"
          }, {
            "name": "open",
            "value": "26",
            "formatted_value": "26"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130408", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "498",
            "formatted_value": "498"
          }, {
            "name": "outgoing",
            "value": "496",
            "formatted_value": "496"
          }, {
            "name": "open",
            "value": "2",
            "formatted_value": "2"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130409", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "136",
            "formatted_value": "136"
          }, {
            "name": "incoming",
            "value": "302",
            "formatted_value": "302"
          }, {
            "name": "outgoing",
            "value": "294",
            "formatted_value": "294"
          }, {
            "name": "open",
            "value": "268",
            "formatted_value": "268"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130409", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "82",
            "formatted_value": "82"
          }, {
            "name": "incoming",
            "value": "207",
            "formatted_value": "207"
          }, {
            "name": "outgoing",
            "value": "184",
            "formatted_value": "184"
          }, {
            "name": "open",
            "value": "702",
            "formatted_value": "702"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130409", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "81",
            "formatted_value": "81"
          }, {
            "name": "incoming",
            "value": "243",
            "formatted_value": "243"
          }, {
            "name": "outgoing",
            "value": "235",
            "formatted_value": "235"
          }, {
            "name": "open",
            "value": "226",
            "formatted_value": "226"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130409", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "incoming",
            "value": "128",
            "formatted_value": "128"
          }, {
            "name": "outgoing",
            "value": "130",
            "formatted_value": "130"
          }, {
            "name": "open",
            "value": "122",
            "formatted_value": "122"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130409", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "outgoing",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "open",
            "value": "32",
            "formatted_value": "32"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130409", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "35",
            "formatted_value": "35"
          }, {
            "name": "incoming",
            "value": "513",
            "formatted_value": "513"
          }, {
            "name": "outgoing",
            "value": "513",
            "formatted_value": "513"
          }, {
            "name": "open",
            "value": "2",
            "formatted_value": "2"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130410", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "139",
            "formatted_value": "139"
          }, {
            "name": "incoming",
            "value": "295",
            "formatted_value": "295"
          }, {
            "name": "outgoing",
            "value": "270",
            "formatted_value": "270"
          }, {
            "name": "open",
            "value": "293",
            "formatted_value": "293"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130410", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "74",
            "formatted_value": "74"
          }, {
            "name": "incoming",
            "value": "175",
            "formatted_value": "175"
          }, {
            "name": "outgoing",
            "value": "133",
            "formatted_value": "133"
          }, {
            "name": "open",
            "value": "744",
            "formatted_value": "744"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130410", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "79",
            "formatted_value": "79"
          }, {
            "name": "incoming",
            "value": "237",
            "formatted_value": "237"
          }, {
            "name": "outgoing",
            "value": "268",
            "formatted_value": "268"
          }, {
            "name": "open",
            "value": "195",
            "formatted_value": "195"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130410", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "incoming",
            "value": "117",
            "formatted_value": "117"
          }, {
            "name": "outgoing",
            "value": "114",
            "formatted_value": "114"
          }, {
            "name": "open",
            "value": "125",
            "formatted_value": "125"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130410", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "incoming",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "outgoing",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "open",
            "value": "35",
            "formatted_value": "35"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130410", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "38",
            "formatted_value": "38"
          }, {
            "name": "incoming",
            "value": "194",
            "formatted_value": "194"
          }, {
            "name": "outgoing",
            "value": "196",
            "formatted_value": "196"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130411", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "132",
            "formatted_value": "132"
          }, {
            "name": "incoming",
            "value": "341",
            "formatted_value": "341"
          }, {
            "name": "outgoing",
            "value": "326",
            "formatted_value": "326"
          }, {
            "name": "open",
            "value": "308",
            "formatted_value": "308"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130411", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "80",
            "formatted_value": "80"
          }, {
            "name": "incoming",
            "value": "235",
            "formatted_value": "235"
          }, {
            "name": "outgoing",
            "value": "216",
            "formatted_value": "216"
          }, {
            "name": "open",
            "value": "763",
            "formatted_value": "763"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130411", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "77",
            "formatted_value": "77"
          }, {
            "name": "incoming",
            "value": "241",
            "formatted_value": "241"
          }, {
            "name": "outgoing",
            "value": "259",
            "formatted_value": "259"
          }, {
            "name": "open",
            "value": "177",
            "formatted_value": "177"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130411", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "incoming",
            "value": "127",
            "formatted_value": "127"
          }, {
            "name": "outgoing",
            "value": "130",
            "formatted_value": "130"
          }, {
            "name": "open",
            "value": "122",
            "formatted_value": "122"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130411", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "36",
            "formatted_value": "36"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130411", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "396",
            "formatted_value": "396"
          }, {
            "name": "outgoing",
            "value": "395",
            "formatted_value": "395"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130412", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "147",
            "formatted_value": "147"
          }, {
            "name": "incoming",
            "value": "320",
            "formatted_value": "320"
          }, {
            "name": "outgoing",
            "value": "302",
            "formatted_value": "302"
          }, {
            "name": "open",
            "value": "326",
            "formatted_value": "326"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130412", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "71",
            "formatted_value": "71"
          }, {
            "name": "incoming",
            "value": "115",
            "formatted_value": "115"
          }, {
            "name": "outgoing",
            "value": "152",
            "formatted_value": "152"
          }, {
            "name": "open",
            "value": "726",
            "formatted_value": "726"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130412", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "71",
            "formatted_value": "71"
          }, {
            "name": "incoming",
            "value": "206",
            "formatted_value": "206"
          }, {
            "name": "outgoing",
            "value": "243",
            "formatted_value": "243"
          }, {
            "name": "open",
            "value": "140",
            "formatted_value": "140"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130412", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "incoming",
            "value": "212",
            "formatted_value": "212"
          }, {
            "name": "outgoing",
            "value": "190",
            "formatted_value": "190"
          }, {
            "name": "open",
            "value": "144",
            "formatted_value": "144"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130412", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "13",
            "formatted_value": "13"
          }, {
            "name": "incoming",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "outgoing",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "open",
            "value": "35",
            "formatted_value": "35"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130412", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "incoming",
            "value": "784",
            "formatted_value": "784"
          }, {
            "name": "outgoing",
            "value": "785",
            "formatted_value": "785"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130413", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "63",
            "formatted_value": "63"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "325",
            "formatted_value": "325"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130413", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "48",
            "formatted_value": "48"
          }, {
            "name": "incoming",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "727",
            "formatted_value": "727"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130413", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "outgoing",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "open",
            "value": "140",
            "formatted_value": "140"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130413", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "144",
            "formatted_value": "144"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130413", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "35",
            "formatted_value": "35"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130413", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "incoming",
            "value": "49",
            "formatted_value": "49"
          }, {
            "name": "outgoing",
            "value": "49",
            "formatted_value": "49"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130414", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "62",
            "formatted_value": "62"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "325",
            "formatted_value": "325"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130414", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "50",
            "formatted_value": "50"
          }, {
            "name": "incoming",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "outgoing",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "open",
            "value": "721",
            "formatted_value": "721"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130414", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "31",
            "formatted_value": "31"
          }, {
            "name": "incoming",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "outgoing",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "open",
            "value": "140",
            "formatted_value": "140"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130414", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "144",
            "formatted_value": "144"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130414", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "35",
            "formatted_value": "35"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130414", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130415", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "101",
            "formatted_value": "101"
          }, {
            "name": "incoming",
            "value": "164",
            "formatted_value": "164"
          }, {
            "name": "outgoing",
            "value": "239",
            "formatted_value": "239"
          }, {
            "name": "open",
            "value": "250",
            "formatted_value": "250"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130415", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "83",
            "formatted_value": "83"
          }, {
            "name": "incoming",
            "value": "240",
            "formatted_value": "240"
          }, {
            "name": "outgoing",
            "value": "192",
            "formatted_value": "192"
          }, {
            "name": "open",
            "value": "769",
            "formatted_value": "769"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130415", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "65",
            "formatted_value": "65"
          }, {
            "name": "incoming",
            "value": "199",
            "formatted_value": "199"
          }, {
            "name": "outgoing",
            "value": "198",
            "formatted_value": "198"
          }, {
            "name": "open",
            "value": "141",
            "formatted_value": "141"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130415", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "114",
            "formatted_value": "114"
          }, {
            "name": "outgoing",
            "value": "203",
            "formatted_value": "203"
          }, {
            "name": "open",
            "value": "55",
            "formatted_value": "55"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130415", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "31",
            "formatted_value": "31"
          }, {
            "name": "outgoing",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "open",
            "value": "26",
            "formatted_value": "26"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130415", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "incoming",
            "value": "439",
            "formatted_value": "439"
          }, {
            "name": "outgoing",
            "value": "429",
            "formatted_value": "429"
          }, {
            "name": "open",
            "value": "10",
            "formatted_value": "10"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130416", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "107",
            "formatted_value": "107"
          }, {
            "name": "incoming",
            "value": "289",
            "formatted_value": "289"
          }, {
            "name": "outgoing",
            "value": "308",
            "formatted_value": "308"
          }, {
            "name": "open",
            "value": "231",
            "formatted_value": "231"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130416", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "69",
            "formatted_value": "69"
          }, {
            "name": "incoming",
            "value": "141",
            "formatted_value": "141"
          }, {
            "name": "outgoing",
            "value": "128",
            "formatted_value": "128"
          }, {
            "name": "open",
            "value": "782",
            "formatted_value": "782"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130416", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "66",
            "formatted_value": "66"
          }, {
            "name": "incoming",
            "value": "183",
            "formatted_value": "183"
          }, {
            "name": "outgoing",
            "value": "173",
            "formatted_value": "173"
          }, {
            "name": "open",
            "value": "151",
            "formatted_value": "151"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130416", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "incoming",
            "value": "121",
            "formatted_value": "121"
          }, {
            "name": "outgoing",
            "value": "74",
            "formatted_value": "74"
          }, {
            "name": "open",
            "value": "102",
            "formatted_value": "102"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130416", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "47",
            "formatted_value": "47"
          }, {
            "name": "outgoing",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "open",
            "value": "30",
            "formatted_value": "30"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130416", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "incoming",
            "value": "571",
            "formatted_value": "571"
          }, {
            "name": "outgoing",
            "value": "561",
            "formatted_value": "561"
          }, {
            "name": "open",
            "value": "20",
            "formatted_value": "20"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130417", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "114",
            "formatted_value": "114"
          }, {
            "name": "incoming",
            "value": "268",
            "formatted_value": "268"
          }, {
            "name": "outgoing",
            "value": "308",
            "formatted_value": "308"
          }, {
            "name": "open",
            "value": "198",
            "formatted_value": "198"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130417", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "76",
            "formatted_value": "76"
          }, {
            "name": "incoming",
            "value": "166",
            "formatted_value": "166"
          }, {
            "name": "outgoing",
            "value": "159",
            "formatted_value": "159"
          }, {
            "name": "open",
            "value": "787",
            "formatted_value": "787"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130417", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "62",
            "formatted_value": "62"
          }, {
            "name": "incoming",
            "value": "196",
            "formatted_value": "196"
          }, {
            "name": "outgoing",
            "value": "182",
            "formatted_value": "182"
          }, {
            "name": "open",
            "value": "170",
            "formatted_value": "170"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130417", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "108",
            "formatted_value": "108"
          }, {
            "name": "outgoing",
            "value": "54",
            "formatted_value": "54"
          }, {
            "name": "open",
            "value": "156",
            "formatted_value": "156"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130417", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "outgoing",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "open",
            "value": "24",
            "formatted_value": "24"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130417", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "incoming",
            "value": "740",
            "formatted_value": "740"
          }, {
            "name": "outgoing",
            "value": "739",
            "formatted_value": "739"
          }, {
            "name": "open",
            "value": "12",
            "formatted_value": "12"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130418", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "95",
            "formatted_value": "95"
          }, {
            "name": "incoming",
            "value": "269",
            "formatted_value": "269"
          }, {
            "name": "outgoing",
            "value": "214",
            "formatted_value": "214"
          }, {
            "name": "open",
            "value": "254",
            "formatted_value": "254"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130418", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "74",
            "formatted_value": "74"
          }, {
            "name": "incoming",
            "value": "121",
            "formatted_value": "121"
          }, {
            "name": "outgoing",
            "value": "111",
            "formatted_value": "111"
          }, {
            "name": "open",
            "value": "797",
            "formatted_value": "797"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130418", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "52",
            "formatted_value": "52"
          }, {
            "name": "incoming",
            "value": "208",
            "formatted_value": "208"
          }, {
            "name": "outgoing",
            "value": "169",
            "formatted_value": "169"
          }, {
            "name": "open",
            "value": "209",
            "formatted_value": "209"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130418", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "incoming",
            "value": "136",
            "formatted_value": "136"
          }, {
            "name": "outgoing",
            "value": "117",
            "formatted_value": "117"
          }, {
            "name": "open",
            "value": "177",
            "formatted_value": "177"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130418", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "incoming",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "27",
            "formatted_value": "27"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130418", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "502",
            "formatted_value": "502"
          }, {
            "name": "outgoing",
            "value": "493",
            "formatted_value": "493"
          }, {
            "name": "open",
            "value": "20",
            "formatted_value": "20"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130419", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "122",
            "formatted_value": "122"
          }, {
            "name": "incoming",
            "value": "281",
            "formatted_value": "281"
          }, {
            "name": "outgoing",
            "value": "273",
            "formatted_value": "273"
          }, {
            "name": "open",
            "value": "261",
            "formatted_value": "261"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130419", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "73",
            "formatted_value": "73"
          }, {
            "name": "incoming",
            "value": "121",
            "formatted_value": "121"
          }, {
            "name": "outgoing",
            "value": "155",
            "formatted_value": "155"
          }, {
            "name": "open",
            "value": "762",
            "formatted_value": "762"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130419", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "45",
            "formatted_value": "45"
          }, {
            "name": "incoming",
            "value": "170",
            "formatted_value": "170"
          }, {
            "name": "outgoing",
            "value": "112",
            "formatted_value": "112"
          }, {
            "name": "open",
            "value": "274",
            "formatted_value": "274"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130419", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "incoming",
            "value": "107",
            "formatted_value": "107"
          }, {
            "name": "outgoing",
            "value": "150",
            "formatted_value": "150"
          }, {
            "name": "open",
            "value": "135",
            "formatted_value": "135"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130419", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "incoming",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "outgoing",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "open",
            "value": "31",
            "formatted_value": "31"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130419", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "incoming",
            "value": "291",
            "formatted_value": "291"
          }, {
            "name": "outgoing",
            "value": "286",
            "formatted_value": "286"
          }, {
            "name": "open",
            "value": "15",
            "formatted_value": "15"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130420", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "264",
            "formatted_value": "264"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130420", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "outgoing",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "open",
            "value": "757",
            "formatted_value": "757"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130420", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "285",
            "formatted_value": "285"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130420", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "135",
            "formatted_value": "135"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130420", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "31",
            "formatted_value": "31"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130420", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130421", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "44",
            "formatted_value": "44"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "262",
            "formatted_value": "262"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130421", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "757",
            "formatted_value": "757"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130421", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "29",
            "formatted_value": "29"
          }, {
            "name": "incoming",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "285",
            "formatted_value": "285"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130421", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "135",
            "formatted_value": "135"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130421", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "32",
            "formatted_value": "32"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130421", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "incoming",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "outgoing",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130422", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "120",
            "formatted_value": "120"
          }, {
            "name": "incoming",
            "value": "269",
            "formatted_value": "269"
          }, {
            "name": "outgoing",
            "value": "317",
            "formatted_value": "317"
          }, {
            "name": "open",
            "value": "215",
            "formatted_value": "215"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130422", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "75",
            "formatted_value": "75"
          }, {
            "name": "incoming",
            "value": "218",
            "formatted_value": "218"
          }, {
            "name": "outgoing",
            "value": "207",
            "formatted_value": "207"
          }, {
            "name": "open",
            "value": "769",
            "formatted_value": "769"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130422", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "55",
            "formatted_value": "55"
          }, {
            "name": "incoming",
            "value": "137",
            "formatted_value": "137"
          }, {
            "name": "outgoing",
            "value": "117",
            "formatted_value": "117"
          }, {
            "name": "open",
            "value": "305",
            "formatted_value": "305"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130422", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "incoming",
            "value": "196",
            "formatted_value": "196"
          }, {
            "name": "outgoing",
            "value": "224",
            "formatted_value": "224"
          }, {
            "name": "open",
            "value": "103",
            "formatted_value": "103"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130422", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "outgoing",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "open",
            "value": "39",
            "formatted_value": "39"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130422", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "44",
            "formatted_value": "44"
          }, {
            "name": "incoming",
            "value": "309",
            "formatted_value": "309"
          }, {
            "name": "outgoing",
            "value": "304",
            "formatted_value": "304"
          }, {
            "name": "open",
            "value": "5",
            "formatted_value": "5"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130423", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "107",
            "formatted_value": "107"
          }, {
            "name": "incoming",
            "value": "276",
            "formatted_value": "276"
          }, {
            "name": "outgoing",
            "value": "289",
            "formatted_value": "289"
          }, {
            "name": "open",
            "value": "186",
            "formatted_value": "186"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130423", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "76",
            "formatted_value": "76"
          }, {
            "name": "incoming",
            "value": "199",
            "formatted_value": "199"
          }, {
            "name": "outgoing",
            "value": "217",
            "formatted_value": "217"
          }, {
            "name": "open",
            "value": "750",
            "formatted_value": "750"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130423", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "71",
            "formatted_value": "71"
          }, {
            "name": "incoming",
            "value": "166",
            "formatted_value": "166"
          }, {
            "name": "outgoing",
            "value": "239",
            "formatted_value": "239"
          }, {
            "name": "open",
            "value": "234",
            "formatted_value": "234"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130423", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "187",
            "formatted_value": "187"
          }, {
            "name": "outgoing",
            "value": "173",
            "formatted_value": "173"
          }, {
            "name": "open",
            "value": "114",
            "formatted_value": "114"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130423", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "incoming",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "outgoing",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "open",
            "value": "38",
            "formatted_value": "38"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130423", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "incoming",
            "value": "584",
            "formatted_value": "584"
          }, {
            "name": "outgoing",
            "value": "570",
            "formatted_value": "570"
          }, {
            "name": "open",
            "value": "19",
            "formatted_value": "19"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130424", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "154",
            "formatted_value": "154"
          }, {
            "name": "incoming",
            "value": "390",
            "formatted_value": "390"
          }, {
            "name": "outgoing",
            "value": "456",
            "formatted_value": "456"
          }, {
            "name": "open",
            "value": "131",
            "formatted_value": "131"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130424", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "75",
            "formatted_value": "75"
          }, {
            "name": "incoming",
            "value": "183",
            "formatted_value": "183"
          }, {
            "name": "outgoing",
            "value": "196",
            "formatted_value": "196"
          }, {
            "name": "open",
            "value": "735",
            "formatted_value": "735"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130424", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "70",
            "formatted_value": "70"
          }, {
            "name": "incoming",
            "value": "185",
            "formatted_value": "185"
          }, {
            "name": "outgoing",
            "value": "221",
            "formatted_value": "221"
          }, {
            "name": "open",
            "value": "197",
            "formatted_value": "197"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130424", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "29",
            "formatted_value": "29"
          }, {
            "name": "incoming",
            "value": "157",
            "formatted_value": "157"
          }, {
            "name": "outgoing",
            "value": "122",
            "formatted_value": "122"
          }, {
            "name": "open",
            "value": "143",
            "formatted_value": "143"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130424", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "incoming",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "outgoing",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "open",
            "value": "46",
            "formatted_value": "46"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130424", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "51",
            "formatted_value": "51"
          }, {
            "name": "incoming",
            "value": "928",
            "formatted_value": "928"
          }, {
            "name": "outgoing",
            "value": "919",
            "formatted_value": "919"
          }, {
            "name": "open",
            "value": "27",
            "formatted_value": "27"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130402", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "204",
            "formatted_value": "204"
          }, {
            "name": "incoming",
            "value": "675",
            "formatted_value": "675"
          }, {
            "name": "outgoing",
            "value": "640",
            "formatted_value": "640"
          }, {
            "name": "open",
            "value": "843",
            "formatted_value": "843"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130402", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "98",
            "formatted_value": "98"
          }, {
            "name": "incoming",
            "value": "130",
            "formatted_value": "130"
          }, {
            "name": "outgoing",
            "value": "126",
            "formatted_value": "126"
          }, {
            "name": "open",
            "value": "939",
            "formatted_value": "939"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130402", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "incoming",
            "value": "119",
            "formatted_value": "119"
          }, {
            "name": "outgoing",
            "value": "109",
            "formatted_value": "109"
          }, {
            "name": "open",
            "value": "67",
            "formatted_value": "67"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130402", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "incoming",
            "value": "120",
            "formatted_value": "120"
          }, {
            "name": "outgoing",
            "value": "103",
            "formatted_value": "103"
          }, {
            "name": "open",
            "value": "54",
            "formatted_value": "54"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130402", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "incoming",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "outgoing",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "open",
            "value": "263",
            "formatted_value": "263"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130402", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "incoming",
            "value": "188",
            "formatted_value": "188"
          }, {
            "name": "outgoing",
            "value": "186",
            "formatted_value": "186"
          }, {
            "name": "open",
            "value": "3",
            "formatted_value": "3"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130403", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "237",
            "formatted_value": "237"
          }, {
            "name": "incoming",
            "value": "823",
            "formatted_value": "823"
          }, {
            "name": "outgoing",
            "value": "856",
            "formatted_value": "856"
          }, {
            "name": "open",
            "value": "810",
            "formatted_value": "810"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130403", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "101",
            "formatted_value": "101"
          }, {
            "name": "incoming",
            "value": "239",
            "formatted_value": "239"
          }, {
            "name": "outgoing",
            "value": "253",
            "formatted_value": "253"
          }, {
            "name": "open",
            "value": "925",
            "formatted_value": "925"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130403", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "51",
            "formatted_value": "51"
          }, {
            "name": "incoming",
            "value": "248",
            "formatted_value": "248"
          }, {
            "name": "outgoing",
            "value": "288",
            "formatted_value": "288"
          }, {
            "name": "open",
            "value": "27",
            "formatted_value": "27"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130403", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "117",
            "formatted_value": "117"
          }, {
            "name": "outgoing",
            "value": "128",
            "formatted_value": "128"
          }, {
            "name": "open",
            "value": "43",
            "formatted_value": "43"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130403", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "incoming",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "outgoing",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "open",
            "value": "261",
            "formatted_value": "261"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130403", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "incoming",
            "value": "315",
            "formatted_value": "315"
          }, {
            "name": "outgoing",
            "value": "316",
            "formatted_value": "316"
          }, {
            "name": "open",
            "value": "2",
            "formatted_value": "2"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130404", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "213",
            "formatted_value": "213"
          }, {
            "name": "incoming",
            "value": "827",
            "formatted_value": "827"
          }, {
            "name": "outgoing",
            "value": "862",
            "formatted_value": "862"
          }, {
            "name": "open",
            "value": "775",
            "formatted_value": "775"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130404", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "96",
            "formatted_value": "96"
          }, {
            "name": "incoming",
            "value": "257",
            "formatted_value": "257"
          }, {
            "name": "outgoing",
            "value": "231",
            "formatted_value": "231"
          }, {
            "name": "open",
            "value": "951",
            "formatted_value": "951"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130404", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "incoming",
            "value": "184",
            "formatted_value": "184"
          }, {
            "name": "outgoing",
            "value": "159",
            "formatted_value": "159"
          }, {
            "name": "open",
            "value": "52",
            "formatted_value": "52"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130404", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "incoming",
            "value": "66",
            "formatted_value": "66"
          }, {
            "name": "outgoing",
            "value": "75",
            "formatted_value": "75"
          }, {
            "name": "open",
            "value": "34",
            "formatted_value": "34"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130404", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "incoming",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "outgoing",
            "value": "13",
            "formatted_value": "13"
          }, {
            "name": "open",
            "value": "264",
            "formatted_value": "264"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130404", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "incoming",
            "value": "426",
            "formatted_value": "426"
          }, {
            "name": "outgoing",
            "value": "427",
            "formatted_value": "427"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130405", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "247",
            "formatted_value": "247"
          }, {
            "name": "incoming",
            "value": "754",
            "formatted_value": "754"
          }, {
            "name": "outgoing",
            "value": "767",
            "formatted_value": "767"
          }, {
            "name": "open",
            "value": "762",
            "formatted_value": "762"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130405", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "104",
            "formatted_value": "104"
          }, {
            "name": "incoming",
            "value": "153",
            "formatted_value": "153"
          }, {
            "name": "outgoing",
            "value": "139",
            "formatted_value": "139"
          }, {
            "name": "open",
            "value": "965",
            "formatted_value": "965"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130405", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "105",
            "formatted_value": "105"
          }, {
            "name": "outgoing",
            "value": "101",
            "formatted_value": "101"
          }, {
            "name": "open",
            "value": "56",
            "formatted_value": "56"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130405", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "46",
            "formatted_value": "46"
          }, {
            "name": "incoming",
            "value": "123",
            "formatted_value": "123"
          }, {
            "name": "outgoing",
            "value": "140",
            "formatted_value": "140"
          }, {
            "name": "open",
            "value": "17",
            "formatted_value": "17"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130405", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "incoming",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "outgoing",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "open",
            "value": "272",
            "formatted_value": "272"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130405", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "incoming",
            "value": "293",
            "formatted_value": "293"
          }, {
            "name": "outgoing",
            "value": "293",
            "formatted_value": "293"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130406", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "131",
            "formatted_value": "131"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "760",
            "formatted_value": "760"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130406", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "80",
            "formatted_value": "80"
          }, {
            "name": "incoming",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "outgoing",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "open",
            "value": "962",
            "formatted_value": "962"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130406", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "56",
            "formatted_value": "56"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130406", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "17",
            "formatted_value": "17"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130406", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "272",
            "formatted_value": "272"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130406", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130407", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "139",
            "formatted_value": "139"
          }, {
            "name": "incoming",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "outgoing",
            "value": "94",
            "formatted_value": "94"
          }, {
            "name": "open",
            "value": "699",
            "formatted_value": "699"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130407", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "82",
            "formatted_value": "82"
          }, {
            "name": "incoming",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "outgoing",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "open",
            "value": "961",
            "formatted_value": "961"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130407", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "56",
            "formatted_value": "56"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130407", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "outgoing",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "open",
            "value": "24",
            "formatted_value": "24"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130407", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "272",
            "formatted_value": "272"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130407", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "13",
            "formatted_value": "13"
          }, {
            "name": "incoming",
            "value": "94",
            "formatted_value": "94"
          }, {
            "name": "outgoing",
            "value": "94",
            "formatted_value": "94"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130408", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "244",
            "formatted_value": "244"
          }, {
            "name": "incoming",
            "value": "790",
            "formatted_value": "790"
          }, {
            "name": "outgoing",
            "value": "787",
            "formatted_value": "787"
          }, {
            "name": "open",
            "value": "702",
            "formatted_value": "702"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130408", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "105",
            "formatted_value": "105"
          }, {
            "name": "incoming",
            "value": "136",
            "formatted_value": "136"
          }, {
            "name": "outgoing",
            "value": "127",
            "formatted_value": "127"
          }, {
            "name": "open",
            "value": "970",
            "formatted_value": "970"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130408", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "55",
            "formatted_value": "55"
          }, {
            "name": "incoming",
            "value": "116",
            "formatted_value": "116"
          }, {
            "name": "outgoing",
            "value": "127",
            "formatted_value": "127"
          }, {
            "name": "open",
            "value": "45",
            "formatted_value": "45"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130408", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "incoming",
            "value": "79",
            "formatted_value": "79"
          }, {
            "name": "outgoing",
            "value": "71",
            "formatted_value": "71"
          }, {
            "name": "open",
            "value": "32",
            "formatted_value": "32"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130408", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "incoming",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "286",
            "formatted_value": "286"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130408", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "incoming",
            "value": "270",
            "formatted_value": "270"
          }, {
            "name": "outgoing",
            "value": "269",
            "formatted_value": "269"
          }, {
            "name": "open",
            "value": "2",
            "formatted_value": "2"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130409", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "197",
            "formatted_value": "197"
          }, {
            "name": "incoming",
            "value": "600",
            "formatted_value": "600"
          }, {
            "name": "outgoing",
            "value": "572",
            "formatted_value": "572"
          }, {
            "name": "open",
            "value": "730",
            "formatted_value": "730"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130409", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "102",
            "formatted_value": "102"
          }, {
            "name": "incoming",
            "value": "137",
            "formatted_value": "137"
          }, {
            "name": "outgoing",
            "value": "168",
            "formatted_value": "168"
          }, {
            "name": "open",
            "value": "939",
            "formatted_value": "939"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130409", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "44",
            "formatted_value": "44"
          }, {
            "name": "incoming",
            "value": "114",
            "formatted_value": "114"
          }, {
            "name": "outgoing",
            "value": "99",
            "formatted_value": "99"
          }, {
            "name": "open",
            "value": "60",
            "formatted_value": "60"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130409", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "incoming",
            "value": "85",
            "formatted_value": "85"
          }, {
            "name": "outgoing",
            "value": "61",
            "formatted_value": "61"
          }, {
            "name": "open",
            "value": "56",
            "formatted_value": "56"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130409", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "outgoing",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "open",
            "value": "294",
            "formatted_value": "294"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130409", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "incoming",
            "value": "290",
            "formatted_value": "290"
          }, {
            "name": "outgoing",
            "value": "290",
            "formatted_value": "290"
          }, {
            "name": "open",
            "value": "2",
            "formatted_value": "2"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130410", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "208",
            "formatted_value": "208"
          }, {
            "name": "incoming",
            "value": "613",
            "formatted_value": "613"
          }, {
            "name": "outgoing",
            "value": "748",
            "formatted_value": "748"
          }, {
            "name": "open",
            "value": "595",
            "formatted_value": "595"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130410", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "96",
            "formatted_value": "96"
          }, {
            "name": "incoming",
            "value": "157",
            "formatted_value": "157"
          }, {
            "name": "outgoing",
            "value": "125",
            "formatted_value": "125"
          }, {
            "name": "open",
            "value": "971",
            "formatted_value": "971"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130410", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "66",
            "formatted_value": "66"
          }, {
            "name": "incoming",
            "value": "135",
            "formatted_value": "135"
          }, {
            "name": "outgoing",
            "value": "109",
            "formatted_value": "109"
          }, {
            "name": "open",
            "value": "86",
            "formatted_value": "86"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130410", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "83",
            "formatted_value": "83"
          }, {
            "name": "outgoing",
            "value": "101",
            "formatted_value": "101"
          }, {
            "name": "open",
            "value": "38",
            "formatted_value": "38"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130410", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "incoming",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "outgoing",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "open",
            "value": "312",
            "formatted_value": "312"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130410", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "incoming",
            "value": "278",
            "formatted_value": "278"
          }, {
            "name": "outgoing",
            "value": "277",
            "formatted_value": "277"
          }, {
            "name": "open",
            "value": "3",
            "formatted_value": "3"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130411", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "198",
            "formatted_value": "198"
          }, {
            "name": "incoming",
            "value": "745",
            "formatted_value": "745"
          }, {
            "name": "outgoing",
            "value": "751",
            "formatted_value": "751"
          }, {
            "name": "open",
            "value": "589",
            "formatted_value": "589"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130411", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "99",
            "formatted_value": "99"
          }, {
            "name": "incoming",
            "value": "415",
            "formatted_value": "415"
          }, {
            "name": "outgoing",
            "value": "382",
            "formatted_value": "382"
          }, {
            "name": "open",
            "value": "1004",
            "formatted_value": "1004"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130411", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "54",
            "formatted_value": "54"
          }, {
            "name": "incoming",
            "value": "186",
            "formatted_value": "186"
          }, {
            "name": "outgoing",
            "value": "179",
            "formatted_value": "179"
          }, {
            "name": "open",
            "value": "93",
            "formatted_value": "93"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130411", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "83",
            "formatted_value": "83"
          }, {
            "name": "outgoing",
            "value": "79",
            "formatted_value": "79"
          }, {
            "name": "open",
            "value": "42",
            "formatted_value": "42"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130411", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "incoming",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "outgoing",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "open",
            "value": "320",
            "formatted_value": "320"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130411", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "incoming",
            "value": "360",
            "formatted_value": "360"
          }, {
            "name": "outgoing",
            "value": "359",
            "formatted_value": "359"
          }, {
            "name": "open",
            "value": "4",
            "formatted_value": "4"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130412", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "206",
            "formatted_value": "206"
          }, {
            "name": "incoming",
            "value": "632",
            "formatted_value": "632"
          }, {
            "name": "outgoing",
            "value": "568",
            "formatted_value": "568"
          }, {
            "name": "open",
            "value": "653",
            "formatted_value": "653"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130412", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "86",
            "formatted_value": "86"
          }, {
            "name": "incoming",
            "value": "266",
            "formatted_value": "266"
          }, {
            "name": "outgoing",
            "value": "231",
            "formatted_value": "231"
          }, {
            "name": "open",
            "value": "1039",
            "formatted_value": "1039"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130412", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "62",
            "formatted_value": "62"
          }, {
            "name": "incoming",
            "value": "154",
            "formatted_value": "154"
          }, {
            "name": "outgoing",
            "value": "190",
            "formatted_value": "190"
          }, {
            "name": "open",
            "value": "57",
            "formatted_value": "57"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130412", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "130",
            "formatted_value": "130"
          }, {
            "name": "outgoing",
            "value": "132",
            "formatted_value": "132"
          }, {
            "name": "open",
            "value": "40",
            "formatted_value": "40"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130412", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "incoming",
            "value": "31",
            "formatted_value": "31"
          }, {
            "name": "outgoing",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "open",
            "value": "318",
            "formatted_value": "318"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130412", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "497",
            "formatted_value": "497"
          }, {
            "name": "outgoing",
            "value": "500",
            "formatted_value": "500"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130413", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "99",
            "formatted_value": "99"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "653",
            "formatted_value": "653"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130413", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "58",
            "formatted_value": "58"
          }, {
            "name": "incoming",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "outgoing",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "open",
            "value": "1039",
            "formatted_value": "1039"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130413", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "57",
            "formatted_value": "57"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130413", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "40",
            "formatted_value": "40"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130413", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "318",
            "formatted_value": "318"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130413", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "incoming",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "outgoing",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130414", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "99",
            "formatted_value": "99"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "653",
            "formatted_value": "653"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130414", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "60",
            "formatted_value": "60"
          }, {
            "name": "incoming",
            "value": "13",
            "formatted_value": "13"
          }, {
            "name": "outgoing",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "open",
            "value": "1038",
            "formatted_value": "1038"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130414", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "57",
            "formatted_value": "57"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130414", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "40",
            "formatted_value": "40"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130414", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "318",
            "formatted_value": "318"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130414", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130415", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "145",
            "formatted_value": "145"
          }, {
            "name": "incoming",
            "value": "341",
            "formatted_value": "341"
          }, {
            "name": "outgoing",
            "value": "258",
            "formatted_value": "258"
          }, {
            "name": "open",
            "value": "736",
            "formatted_value": "736"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130415", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "72",
            "formatted_value": "72"
          }, {
            "name": "incoming",
            "value": "132",
            "formatted_value": "132"
          }, {
            "name": "outgoing",
            "value": "73",
            "formatted_value": "73"
          }, {
            "name": "open",
            "value": "1097",
            "formatted_value": "1097"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130415", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "49",
            "formatted_value": "49"
          }, {
            "name": "incoming",
            "value": "65",
            "formatted_value": "65"
          }, {
            "name": "outgoing",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "open",
            "value": "102",
            "formatted_value": "102"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130415", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "54",
            "formatted_value": "54"
          }, {
            "name": "outgoing",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "open",
            "value": "52",
            "formatted_value": "52"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130415", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "incoming",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "outgoing",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "open",
            "value": "319",
            "formatted_value": "319"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130415", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "138",
            "formatted_value": "138"
          }, {
            "name": "outgoing",
            "value": "134",
            "formatted_value": "134"
          }, {
            "name": "open",
            "value": "5",
            "formatted_value": "5"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130416", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "173",
            "formatted_value": "173"
          }, {
            "name": "incoming",
            "value": "558",
            "formatted_value": "558"
          }, {
            "name": "outgoing",
            "value": "684",
            "formatted_value": "684"
          }, {
            "name": "open",
            "value": "610",
            "formatted_value": "610"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130416", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "84",
            "formatted_value": "84"
          }, {
            "name": "incoming",
            "value": "124",
            "formatted_value": "124"
          }, {
            "name": "outgoing",
            "value": "134",
            "formatted_value": "134"
          }, {
            "name": "open",
            "value": "1087",
            "formatted_value": "1087"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130416", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "62",
            "formatted_value": "62"
          }, {
            "name": "incoming",
            "value": "93",
            "formatted_value": "93"
          }, {
            "name": "outgoing",
            "value": "121",
            "formatted_value": "121"
          }, {
            "name": "open",
            "value": "74",
            "formatted_value": "74"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130416", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "101",
            "formatted_value": "101"
          }, {
            "name": "outgoing",
            "value": "101",
            "formatted_value": "101"
          }, {
            "name": "open",
            "value": "52",
            "formatted_value": "52"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130416", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "incoming",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "outgoing",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "open",
            "value": "329",
            "formatted_value": "329"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130416", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "incoming",
            "value": "342",
            "formatted_value": "342"
          }, {
            "name": "outgoing",
            "value": "327",
            "formatted_value": "327"
          }, {
            "name": "open",
            "value": "20",
            "formatted_value": "20"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130417", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "169",
            "formatted_value": "169"
          }, {
            "name": "incoming",
            "value": "683",
            "formatted_value": "683"
          }, {
            "name": "outgoing",
            "value": "713",
            "formatted_value": "713"
          }, {
            "name": "open",
            "value": "558",
            "formatted_value": "558"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130417", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "81",
            "formatted_value": "81"
          }, {
            "name": "incoming",
            "value": "254",
            "formatted_value": "254"
          }, {
            "name": "outgoing",
            "value": "257",
            "formatted_value": "257"
          }, {
            "name": "open",
            "value": "1088",
            "formatted_value": "1088"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130417", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "49",
            "formatted_value": "49"
          }, {
            "name": "incoming",
            "value": "214",
            "formatted_value": "214"
          }, {
            "name": "outgoing",
            "value": "228",
            "formatted_value": "228"
          }, {
            "name": "open",
            "value": "58",
            "formatted_value": "58"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130417", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "incoming",
            "value": "106",
            "formatted_value": "106"
          }, {
            "name": "outgoing",
            "value": "108",
            "formatted_value": "108"
          }, {
            "name": "open",
            "value": "45",
            "formatted_value": "45"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130417", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "outgoing",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "open",
            "value": "364",
            "formatted_value": "364"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130417", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "44",
            "formatted_value": "44"
          }, {
            "name": "incoming",
            "value": "714",
            "formatted_value": "714"
          }, {
            "name": "outgoing",
            "value": "702",
            "formatted_value": "702"
          }, {
            "name": "open",
            "value": "21",
            "formatted_value": "21"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130418", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "186",
            "formatted_value": "186"
          }, {
            "name": "incoming",
            "value": "871",
            "formatted_value": "871"
          }, {
            "name": "outgoing",
            "value": "755",
            "formatted_value": "755"
          }, {
            "name": "open",
            "value": "660",
            "formatted_value": "660"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130418", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "78",
            "formatted_value": "78"
          }, {
            "name": "incoming",
            "value": "237",
            "formatted_value": "237"
          }, {
            "name": "outgoing",
            "value": "151",
            "formatted_value": "151"
          }, {
            "name": "open",
            "value": "1178",
            "formatted_value": "1178"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130418", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "50",
            "formatted_value": "50"
          }, {
            "name": "incoming",
            "value": "112",
            "formatted_value": "112"
          }, {
            "name": "outgoing",
            "value": "98",
            "formatted_value": "98"
          }, {
            "name": "open",
            "value": "70",
            "formatted_value": "70"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130418", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "113",
            "formatted_value": "113"
          }, {
            "name": "outgoing",
            "value": "111",
            "formatted_value": "111"
          }, {
            "name": "open",
            "value": "47",
            "formatted_value": "47"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130418", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "outgoing",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "open",
            "value": "383",
            "formatted_value": "383"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130418", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "654",
            "formatted_value": "654"
          }, {
            "name": "outgoing",
            "value": "645",
            "formatted_value": "645"
          }, {
            "name": "open",
            "value": "19",
            "formatted_value": "19"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130419", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "159",
            "formatted_value": "159"
          }, {
            "name": "incoming",
            "value": "517",
            "formatted_value": "517"
          }, {
            "name": "outgoing",
            "value": "626",
            "formatted_value": "626"
          }, {
            "name": "open",
            "value": "537",
            "formatted_value": "537"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130419", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "80",
            "formatted_value": "80"
          }, {
            "name": "incoming",
            "value": "247",
            "formatted_value": "247"
          }, {
            "name": "outgoing",
            "value": "249",
            "formatted_value": "249"
          }, {
            "name": "open",
            "value": "1181",
            "formatted_value": "1181"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130419", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "55",
            "formatted_value": "55"
          }, {
            "name": "incoming",
            "value": "162",
            "formatted_value": "162"
          }, {
            "name": "outgoing",
            "value": "154",
            "formatted_value": "154"
          }, {
            "name": "open",
            "value": "79",
            "formatted_value": "79"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130419", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "incoming",
            "value": "53",
            "formatted_value": "53"
          }, {
            "name": "outgoing",
            "value": "49",
            "formatted_value": "49"
          }, {
            "name": "open",
            "value": "50",
            "formatted_value": "50"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130419", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "incoming",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "outgoing",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "open",
            "value": "357",
            "formatted_value": "357"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130419", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "753",
            "formatted_value": "753"
          }, {
            "name": "outgoing",
            "value": "744",
            "formatted_value": "744"
          }, {
            "name": "open",
            "value": "21",
            "formatted_value": "21"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130420", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "55",
            "formatted_value": "55"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "551",
            "formatted_value": "551"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130420", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "57",
            "formatted_value": "57"
          }, {
            "name": "incoming",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "outgoing",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "open",
            "value": "1182",
            "formatted_value": "1182"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130420", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "82",
            "formatted_value": "82"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130420", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "50",
            "formatted_value": "50"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130420", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "357",
            "formatted_value": "357"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130420", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "incoming",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "outgoing",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130421", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "66",
            "formatted_value": "66"
          }, {
            "name": "incoming",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "outgoing",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "open",
            "value": "502",
            "formatted_value": "502"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130421", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "58",
            "formatted_value": "58"
          }, {
            "name": "incoming",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "outgoing",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "open",
            "value": "1189",
            "formatted_value": "1189"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130421", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "83",
            "formatted_value": "83"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130421", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "53",
            "formatted_value": "53"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130421", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "357",
            "formatted_value": "357"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130421", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "115",
            "formatted_value": "115"
          }, {
            "name": "outgoing",
            "value": "115",
            "formatted_value": "115"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130422", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "160",
            "formatted_value": "160"
          }, {
            "name": "incoming",
            "value": "524",
            "formatted_value": "524"
          }, {
            "name": "outgoing",
            "value": "421",
            "formatted_value": "421"
          }, {
            "name": "open",
            "value": "595",
            "formatted_value": "595"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130422", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "80",
            "formatted_value": "80"
          }, {
            "name": "incoming",
            "value": "162",
            "formatted_value": "162"
          }, {
            "name": "outgoing",
            "value": "107",
            "formatted_value": "107"
          }, {
            "name": "open",
            "value": "1238",
            "formatted_value": "1238"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130422", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "52",
            "formatted_value": "52"
          }, {
            "name": "incoming",
            "value": "78",
            "formatted_value": "78"
          }, {
            "name": "outgoing",
            "value": "65",
            "formatted_value": "65"
          }, {
            "name": "open",
            "value": "90",
            "formatted_value": "90"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130422", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "incoming",
            "value": "69",
            "formatted_value": "69"
          }, {
            "name": "outgoing",
            "value": "38",
            "formatted_value": "38"
          }, {
            "name": "open",
            "value": "83",
            "formatted_value": "83"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130422", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "372",
            "formatted_value": "372"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130422", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "incoming",
            "value": "319",
            "formatted_value": "319"
          }, {
            "name": "outgoing",
            "value": "306",
            "formatted_value": "306"
          }, {
            "name": "open",
            "value": "14",
            "formatted_value": "14"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130423", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "158",
            "formatted_value": "158"
          }, {
            "name": "incoming",
            "value": "533",
            "formatted_value": "533"
          }, {
            "name": "outgoing",
            "value": "399",
            "formatted_value": "399"
          }, {
            "name": "open",
            "value": "696",
            "formatted_value": "696"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130423", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "89",
            "formatted_value": "89"
          }, {
            "name": "incoming",
            "value": "102",
            "formatted_value": "102"
          }, {
            "name": "outgoing",
            "value": "125",
            "formatted_value": "125"
          }, {
            "name": "open",
            "value": "1211",
            "formatted_value": "1211"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130423", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "60",
            "formatted_value": "60"
          }, {
            "name": "incoming",
            "value": "123",
            "formatted_value": "123"
          }, {
            "name": "outgoing",
            "value": "88",
            "formatted_value": "88"
          }, {
            "name": "open",
            "value": "113",
            "formatted_value": "113"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130423", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "incoming",
            "value": "52",
            "formatted_value": "52"
          }, {
            "name": "outgoing",
            "value": "47",
            "formatted_value": "47"
          }, {
            "name": "open",
            "value": "88",
            "formatted_value": "88"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130423", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "incoming",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "outgoing",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "open",
            "value": "402",
            "formatted_value": "402"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130423", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "incoming",
            "value": "1481",
            "formatted_value": "1481"
          }, {
            "name": "outgoing",
            "value": "1469",
            "formatted_value": "1469"
          }, {
            "name": "open",
            "value": "17",
            "formatted_value": "17"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130424", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "134",
            "formatted_value": "134"
          }, {
            "name": "incoming",
            "value": "363",
            "formatted_value": "363"
          }, {
            "name": "outgoing",
            "value": "347",
            "formatted_value": "347"
          }, {
            "name": "open",
            "value": "700",
            "formatted_value": "700"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130424", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "72",
            "formatted_value": "72"
          }, {
            "name": "incoming",
            "value": "101",
            "formatted_value": "101"
          }, {
            "name": "outgoing",
            "value": "87",
            "formatted_value": "87"
          }, {
            "name": "open",
            "value": "1223",
            "formatted_value": "1223"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130424", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "48",
            "formatted_value": "48"
          }, {
            "name": "incoming",
            "value": "96",
            "formatted_value": "96"
          }, {
            "name": "outgoing",
            "value": "67",
            "formatted_value": "67"
          }, {
            "name": "open",
            "value": "132",
            "formatted_value": "132"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130424", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "45",
            "formatted_value": "45"
          }, {
            "name": "outgoing",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "open",
            "value": "105",
            "formatted_value": "105"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130424", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "incoming",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "outgoing",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "open",
            "value": "368",
            "formatted_value": "368"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130424", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "272",
            "formatted_value": "272"
          }, {
            "name": "outgoing",
            "value": "268",
            "formatted_value": "268"
          }, {
            "name": "open",
            "value": "18",
            "formatted_value": "18"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130402", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "63",
            "formatted_value": "63"
          }, {
            "name": "incoming",
            "value": "47",
            "formatted_value": "47"
          }, {
            "name": "outgoing",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "open",
            "value": "521",
            "formatted_value": "521"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130402", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "65",
            "formatted_value": "65"
          }, {
            "name": "incoming",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "outgoing",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "open",
            "value": "898",
            "formatted_value": "898"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130402", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "outgoing",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "open",
            "value": "55",
            "formatted_value": "55"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130402", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130402", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "26",
            "formatted_value": "26"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130402", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "outgoing",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130403", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "54",
            "formatted_value": "54"
          }, {
            "name": "incoming",
            "value": "38",
            "formatted_value": "38"
          }, {
            "name": "outgoing",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "open",
            "value": "529",
            "formatted_value": "529"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130403", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "65",
            "formatted_value": "65"
          }, {
            "name": "incoming",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "outgoing",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "open",
            "value": "891",
            "formatted_value": "891"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130403", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "outgoing",
            "value": "29",
            "formatted_value": "29"
          }, {
            "name": "open",
            "value": "54",
            "formatted_value": "54"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130403", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "incoming",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "22",
            "formatted_value": "22"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130403", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "incoming",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "outgoing",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130404", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "60",
            "formatted_value": "60"
          }, {
            "name": "incoming",
            "value": "44",
            "formatted_value": "44"
          }, {
            "name": "outgoing",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "open",
            "value": "534",
            "formatted_value": "534"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130404", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "66",
            "formatted_value": "66"
          }, {
            "name": "incoming",
            "value": "38",
            "formatted_value": "38"
          }, {
            "name": "outgoing",
            "value": "38",
            "formatted_value": "38"
          }, {
            "name": "open",
            "value": "891",
            "formatted_value": "891"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130404", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "incoming",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "outgoing",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "open",
            "value": "51",
            "formatted_value": "51"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130404", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "20",
            "formatted_value": "20"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130404", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "outgoing",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130405", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "65",
            "formatted_value": "65"
          }, {
            "name": "incoming",
            "value": "267",
            "formatted_value": "267"
          }, {
            "name": "outgoing",
            "value": "479",
            "formatted_value": "479"
          }, {
            "name": "open",
            "value": "322",
            "formatted_value": "322"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130405", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "63",
            "formatted_value": "63"
          }, {
            "name": "incoming",
            "value": "62",
            "formatted_value": "62"
          }, {
            "name": "outgoing",
            "value": "60",
            "formatted_value": "60"
          }, {
            "name": "open",
            "value": "893",
            "formatted_value": "893"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130405", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "incoming",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "outgoing",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "open",
            "value": "62",
            "formatted_value": "62"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130405", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130405", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "27",
            "formatted_value": "27"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130405", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "incoming",
            "value": "135",
            "formatted_value": "135"
          }, {
            "name": "outgoing",
            "value": "135",
            "formatted_value": "135"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130406", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "321",
            "formatted_value": "321"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130406", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "50",
            "formatted_value": "50"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "892",
            "formatted_value": "892"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130406", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "62",
            "formatted_value": "62"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130406", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "27",
            "formatted_value": "27"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130407", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "321",
            "formatted_value": "321"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130407", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "50",
            "formatted_value": "50"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "892",
            "formatted_value": "892"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130407", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "62",
            "formatted_value": "62"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130407", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "27",
            "formatted_value": "27"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130407", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130408", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "59",
            "formatted_value": "59"
          }, {
            "name": "incoming",
            "value": "80",
            "formatted_value": "80"
          }, {
            "name": "outgoing",
            "value": "202",
            "formatted_value": "202"
          }, {
            "name": "open",
            "value": "199",
            "formatted_value": "199"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130408", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "56",
            "formatted_value": "56"
          }, {
            "name": "incoming",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "outgoing",
            "value": "26",
            "formatted_value": "26"
          }, {
            "name": "open",
            "value": "894",
            "formatted_value": "894"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130408", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "outgoing",
            "value": "29",
            "formatted_value": "29"
          }, {
            "name": "open",
            "value": "74",
            "formatted_value": "74"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130408", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "outgoing",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "open",
            "value": "23",
            "formatted_value": "23"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130408", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "incoming",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "outgoing",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130409", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "incoming",
            "value": "45",
            "formatted_value": "45"
          }, {
            "name": "outgoing",
            "value": "56",
            "formatted_value": "56"
          }, {
            "name": "open",
            "value": "188",
            "formatted_value": "188"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130409", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "59",
            "formatted_value": "59"
          }, {
            "name": "incoming",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "outgoing",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "open",
            "value": "883",
            "formatted_value": "883"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130409", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "56",
            "formatted_value": "56"
          }, {
            "name": "outgoing",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "open",
            "value": "103",
            "formatted_value": "103"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130409", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "open",
            "value": "15",
            "formatted_value": "15"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130409", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "incoming",
            "value": "35",
            "formatted_value": "35"
          }, {
            "name": "outgoing",
            "value": "35",
            "formatted_value": "35"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130410", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "41",
            "formatted_value": "41"
          }, {
            "name": "incoming",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "outgoing",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "open",
            "value": "202",
            "formatted_value": "202"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130410", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "47",
            "formatted_value": "47"
          }, {
            "name": "incoming",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "outgoing",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "open",
            "value": "888",
            "formatted_value": "888"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130410", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "incoming",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "outgoing",
            "value": "50",
            "formatted_value": "50"
          }, {
            "name": "open",
            "value": "90",
            "formatted_value": "90"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130410", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "15",
            "formatted_value": "15"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130410", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "outgoing",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130411", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "incoming",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "outgoing",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "open",
            "value": "200",
            "formatted_value": "200"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130411", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "47",
            "formatted_value": "47"
          }, {
            "name": "incoming",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "outgoing",
            "value": "29",
            "formatted_value": "29"
          }, {
            "name": "open",
            "value": "891",
            "formatted_value": "891"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130411", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "incoming",
            "value": "28",
            "formatted_value": "28"
          }, {
            "name": "outgoing",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "open",
            "value": "85",
            "formatted_value": "85"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130411", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "outgoing",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "open",
            "value": "16",
            "formatted_value": "16"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130411", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "incoming",
            "value": "146",
            "formatted_value": "146"
          }, {
            "name": "outgoing",
            "value": "146",
            "formatted_value": "146"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130412", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "outgoing",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "open",
            "value": "211",
            "formatted_value": "211"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130412", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "44",
            "formatted_value": "44"
          }, {
            "name": "incoming",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "outgoing",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "open",
            "value": "895",
            "formatted_value": "895"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130412", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "outgoing",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "open",
            "value": "82",
            "formatted_value": "82"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130412", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "20",
            "formatted_value": "20"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130412", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "29",
            "formatted_value": "29"
          }, {
            "name": "outgoing",
            "value": "29",
            "formatted_value": "29"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130413", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "211",
            "formatted_value": "211"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130413", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "895",
            "formatted_value": "895"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130413", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "82",
            "formatted_value": "82"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130413", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "20",
            "formatted_value": "20"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130413", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130414", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "211",
            "formatted_value": "211"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130414", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "35",
            "formatted_value": "35"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "895",
            "formatted_value": "895"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130414", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "82",
            "formatted_value": "82"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130414", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "20",
            "formatted_value": "20"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130414", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130415", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "incoming",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "outgoing",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "open",
            "value": "217",
            "formatted_value": "217"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130415", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "incoming",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "outgoing",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "open",
            "value": "903",
            "formatted_value": "903"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130415", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "incoming",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "outgoing",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "open",
            "value": "88",
            "formatted_value": "88"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130415", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "24",
            "formatted_value": "24"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130415", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "77",
            "formatted_value": "77"
          }, {
            "name": "outgoing",
            "value": "77",
            "formatted_value": "77"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130416", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "31",
            "formatted_value": "31"
          }, {
            "name": "incoming",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "outgoing",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "open",
            "value": "220",
            "formatted_value": "220"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130416", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "incoming",
            "value": "18",
            "formatted_value": "18"
          }, {
            "name": "outgoing",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "open",
            "value": "910",
            "formatted_value": "910"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130416", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "incoming",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "outgoing",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "open",
            "value": "86",
            "formatted_value": "86"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130416", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "23",
            "formatted_value": "23"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130416", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "outgoing",
            "value": "13",
            "formatted_value": "13"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130417", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "39",
            "formatted_value": "39"
          }, {
            "name": "incoming",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "outgoing",
            "value": "51",
            "formatted_value": "51"
          }, {
            "name": "open",
            "value": "200",
            "formatted_value": "200"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130417", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "49",
            "formatted_value": "49"
          }, {
            "name": "incoming",
            "value": "36",
            "formatted_value": "36"
          }, {
            "name": "outgoing",
            "value": "65",
            "formatted_value": "65"
          }, {
            "name": "open",
            "value": "873",
            "formatted_value": "873"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130417", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "outgoing",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "open",
            "value": "83",
            "formatted_value": "83"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130417", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "outgoing",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "open",
            "value": "16",
            "formatted_value": "16"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130417", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "9",
            "formatted_value": "9"
          }, {
            "name": "incoming",
            "value": "150",
            "formatted_value": "150"
          }, {
            "name": "outgoing",
            "value": "149",
            "formatted_value": "149"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130418", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "incoming",
            "value": "35",
            "formatted_value": "35"
          }, {
            "name": "outgoing",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "open",
            "value": "210",
            "formatted_value": "210"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130418", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "892",
            "formatted_value": "892"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130418", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "20",
            "formatted_value": "20"
          }, {
            "name": "incoming",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "outgoing",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "open",
            "value": "93",
            "formatted_value": "93"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130418", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "17",
            "formatted_value": "17"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130418", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "incoming",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "outgoing",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130419", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "31",
            "formatted_value": "31"
          }, {
            "name": "incoming",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "outgoing",
            "value": "30",
            "formatted_value": "30"
          }, {
            "name": "open",
            "value": "210",
            "formatted_value": "210"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130419", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "42",
            "formatted_value": "42"
          }, {
            "name": "incoming",
            "value": "45",
            "formatted_value": "45"
          }, {
            "name": "outgoing",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "open",
            "value": "904",
            "formatted_value": "904"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130419", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "outgoing",
            "value": "23",
            "formatted_value": "23"
          }, {
            "name": "open",
            "value": "82",
            "formatted_value": "82"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130419", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "outgoing",
            "value": "10",
            "formatted_value": "10"
          }, {
            "name": "open",
            "value": "10",
            "formatted_value": "10"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130419", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "outgoing",
            "value": "43",
            "formatted_value": "43"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130420", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "open",
            "value": "203",
            "formatted_value": "203"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130420", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "35",
            "formatted_value": "35"
          }, {
            "name": "incoming",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "outgoing",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "open",
            "value": "888",
            "formatted_value": "888"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130420", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "81",
            "formatted_value": "81"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130420", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "10",
            "formatted_value": "10"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130420", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130421", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "open",
            "value": "186",
            "formatted_value": "186"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130421", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "34",
            "formatted_value": "34"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "open",
            "value": "886",
            "formatted_value": "886"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130421", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "81",
            "formatted_value": "81"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130421", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "8",
            "formatted_value": "8"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130421", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "incoming",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "outgoing",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130422", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "incoming",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "outgoing",
            "value": "6",
            "formatted_value": "6"
          }, {
            "name": "open",
            "value": "194",
            "formatted_value": "194"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130422", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "33",
            "formatted_value": "33"
          }, {
            "name": "outgoing",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "open",
            "value": "908",
            "formatted_value": "908"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130422", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "19",
            "formatted_value": "19"
          }, {
            "name": "incoming",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "outgoing",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "open",
            "value": "80",
            "formatted_value": "80"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130422", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "10",
            "formatted_value": "10"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130422", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "incoming",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "outgoing",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130423", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "32",
            "formatted_value": "32"
          }, {
            "name": "incoming",
            "value": "21",
            "formatted_value": "21"
          }, {
            "name": "outgoing",
            "value": "24",
            "formatted_value": "24"
          }, {
            "name": "open",
            "value": "190",
            "formatted_value": "190"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130423", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "37",
            "formatted_value": "37"
          }, {
            "name": "incoming",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "outgoing",
            "value": "5",
            "formatted_value": "5"
          }, {
            "name": "open",
            "value": "914",
            "formatted_value": "914"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130423", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "incoming",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "outgoing",
            "value": "27",
            "formatted_value": "27"
          }, {
            "name": "open",
            "value": "80",
            "formatted_value": "80"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130423", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "incoming",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "outgoing",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "open",
            "value": "9",
            "formatted_value": "9"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130423", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "incoming",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "outgoing",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130424", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "25",
            "formatted_value": "25"
          }, {
            "name": "incoming",
            "value": "14",
            "formatted_value": "14"
          }, {
            "name": "outgoing",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "open",
            "value": "189",
            "formatted_value": "189"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130424", "CMS/Patient"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "40",
            "formatted_value": "40"
          }, {
            "name": "incoming",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "outgoing",
            "value": "16",
            "formatted_value": "16"
          }, {
            "name": "open",
            "value": "912",
            "formatted_value": "912"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130424", "Commercial/Other"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "15",
            "formatted_value": "15"
          }, {
            "name": "incoming",
            "value": "11",
            "formatted_value": "11"
          }, {
            "name": "outgoing",
            "value": "12",
            "formatted_value": "12"
          }, {
            "name": "open",
            "value": "79",
            "formatted_value": "79"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130424", "Supervisors"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "3",
            "formatted_value": "3"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "10",
            "formatted_value": "10"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130424", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "outgoing",
            "value": "22",
            "formatted_value": "22"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": [null, "20130402", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130403", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130404", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130405", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130406", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130407", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130408", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130409", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130410", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130411", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130412", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130413", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130414", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130415", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130416", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130417", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "4",
            "formatted_value": "4"
          }, {
            "name": "incoming",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "outgoing",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": [null, "20130417", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": [null, "20130417", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": [null, "20130418", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130423", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130424", "Claim Submission"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "7",
            "formatted_value": "7"
          }, {
            "name": "incoming",
            "value": "17",
            "formatted_value": "17"
          }, {
            "name": "outgoing",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "open",
            "value": "9",
            "formatted_value": "9"
          }
        ]
      }, {
        "key": [null, "20130424", "PSP/IV"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "8",
            "formatted_value": "8"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "8",
            "formatted_value": "8"
          }
        ]
      }, {
        "key": [null, "20130424", "Unknown"],
        "dimensions": ["division", "snapshot_date", "work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "open",
            "value": "0",
            "formatted_value": "0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d"],
        "dimensions": ["division"],
        "measures": [
          {
            "name": "record",
            "value": 6959,
            "formatted_value": "6959"
          }, {
            "name": "incoming",
            "value": 23694.0,
            "formatted_value": "23694.0"
          }, {
            "name": "outgoing",
            "value": 23547.0,
            "formatted_value": "23547.0"
          }, {
            "name": "open",
            "value": 30799.0,
            "formatted_value": "30799.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130402"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 387,
            "formatted_value": "387"
          }, {
            "name": "incoming",
            "value": 1674.0,
            "formatted_value": "1674.0"
          }, {
            "name": "outgoing",
            "value": 1625.0,
            "formatted_value": "1625.0"
          }, {
            "name": "open",
            "value": 1206.0,
            "formatted_value": "1206.0"
          }
        ]
      }, {
        "key": [null, null, "Claim Submission"],
        "dimensions": ["work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": 7283,
            "formatted_value": "7283"
          }, {
            "name": "incoming",
            "value": 17093.0,
            "formatted_value": "17093.0"
          }, {
            "name": "outgoing",
            "value": 17537.0,
            "formatted_value": "17537.0"
          }, {
            "name": "open",
            "value": 27431.0,
            "formatted_value": "27431.0"
          }
        ]
      }, {
        "key": [null, null, "CMS/Patient"],
        "dimensions": ["work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": 4625,
            "formatted_value": "4625"
          }, {
            "name": "incoming",
            "value": 7204.0,
            "formatted_value": "7204.0"
          }, {
            "name": "outgoing",
            "value": 6711.0,
            "formatted_value": "6711.0"
          }, {
            "name": "open",
            "value": 61218.0,
            "formatted_value": "61218.0"
          }
        ]
      }, {
        "key": [null, null, "Commercial/Other"],
        "dimensions": ["work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": 2881,
            "formatted_value": "2881"
          }, {
            "name": "incoming",
            "value": 6382.0,
            "formatted_value": "6382.0"
          }, {
            "name": "outgoing",
            "value": 6291.0,
            "formatted_value": "6291.0"
          }, {
            "name": "open",
            "value": 8221.0,
            "formatted_value": "8221.0"
          }
        ]
      }, {
        "key": [null, null, "PSP/IV"],
        "dimensions": ["work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": 960,
            "formatted_value": "960"
          }, {
            "name": "incoming",
            "value": 4206.0,
            "formatted_value": "4206.0"
          }, {
            "name": "outgoing",
            "value": 4049.0,
            "formatted_value": "4049.0"
          }, {
            "name": "open",
            "value": 3979.0,
            "formatted_value": "3979.0"
          }
        ]
      }, {
        "key": [null, null, "Supervisors"],
        "dimensions": ["work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": 801,
            "formatted_value": "801"
          }, {
            "name": "incoming",
            "value": 860.0,
            "formatted_value": "860.0"
          }, {
            "name": "outgoing",
            "value": 722.0,
            "formatted_value": "722.0"
          }, {
            "name": "open",
            "value": 8482.0,
            "formatted_value": "8482.0"
          }
        ]
      }, {
        "key": [null, null, "Unknown"],
        "dimensions": ["work_queue_team"],
        "measures": [
          {
            "name": "record",
            "value": 1484,
            "formatted_value": "1484"
          }, {
            "name": "incoming",
            "value": 17067.0,
            "formatted_value": "17067.0"
          }, {
            "name": "outgoing",
            "value": 16924.0,
            "formatted_value": "16924.0"
          }, {
            "name": "open",
            "value": 311.0,
            "formatted_value": "311.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130403"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 433,
            "formatted_value": "433"
          }, {
            "name": "incoming",
            "value": 1516.0,
            "formatted_value": "1516.0"
          }, {
            "name": "outgoing",
            "value": 1542.0,
            "formatted_value": "1542.0"
          }, {
            "name": "open",
            "value": 1180.0,
            "formatted_value": "1180.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130404"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 388,
            "formatted_value": "388"
          }, {
            "name": "incoming",
            "value": 1659.0,
            "formatted_value": "1659.0"
          }, {
            "name": "outgoing",
            "value": 1631.0,
            "formatted_value": "1631.0"
          }, {
            "name": "open",
            "value": 1208.0,
            "formatted_value": "1208.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130405"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 340,
            "formatted_value": "340"
          }, {
            "name": "incoming",
            "value": 999.0,
            "formatted_value": "999.0"
          }, {
            "name": "outgoing",
            "value": 952.0,
            "formatted_value": "952.0"
          }, {
            "name": "open",
            "value": 1255.0,
            "formatted_value": "1255.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130406"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 200,
            "formatted_value": "200"
          }, {
            "name": "incoming",
            "value": 7.0,
            "formatted_value": "7.0"
          }, {
            "name": "outgoing",
            "value": 8.0,
            "formatted_value": "8.0"
          }, {
            "name": "open",
            "value": 1254.0,
            "formatted_value": "1254.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130407"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 207,
            "formatted_value": "207"
          }, {
            "name": "incoming",
            "value": 37.0,
            "formatted_value": "37.0"
          }, {
            "name": "outgoing",
            "value": 37.0,
            "formatted_value": "37.0"
          }, {
            "name": "open",
            "value": 1254.0,
            "formatted_value": "1254.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130408"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 350,
            "formatted_value": "350"
          }, {
            "name": "incoming",
            "value": 1447.0,
            "formatted_value": "1447.0"
          }, {
            "name": "outgoing",
            "value": 1392.0,
            "formatted_value": "1392.0"
          }, {
            "name": "open",
            "value": 1309.0,
            "formatted_value": "1309.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130409"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 364,
            "formatted_value": "364"
          }, {
            "name": "incoming",
            "value": 1411.0,
            "formatted_value": "1411.0"
          }, {
            "name": "outgoing",
            "value": 1368.0,
            "formatted_value": "1368.0"
          }, {
            "name": "open",
            "value": 1352.0,
            "formatted_value": "1352.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130410"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 366,
            "formatted_value": "366"
          }, {
            "name": "incoming",
            "value": 1038.0,
            "formatted_value": "1038.0"
          }, {
            "name": "outgoing",
            "value": 998.0,
            "formatted_value": "998.0"
          }, {
            "name": "open",
            "value": 1392.0,
            "formatted_value": "1392.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130411"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 356,
            "formatted_value": "356"
          }, {
            "name": "incoming",
            "value": 1348.0,
            "formatted_value": "1348.0"
          }, {
            "name": "outgoing",
            "value": 1333.0,
            "formatted_value": "1333.0"
          }, {
            "name": "open",
            "value": 1407.0,
            "formatted_value": "1407.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130412"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 366,
            "formatted_value": "366"
          }, {
            "name": "incoming",
            "value": 1661.0,
            "formatted_value": "1661.0"
          }, {
            "name": "outgoing",
            "value": 1697.0,
            "formatted_value": "1697.0"
          }, {
            "name": "open",
            "value": 1371.0,
            "formatted_value": "1371.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130413"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 160,
            "formatted_value": "160"
          }, {
            "name": "incoming",
            "value": 59.0,
            "formatted_value": "59.0"
          }, {
            "name": "outgoing",
            "value": 59.0,
            "formatted_value": "59.0"
          }, {
            "name": "open",
            "value": 1371.0,
            "formatted_value": "1371.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130414"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 164,
            "formatted_value": "164"
          }, {
            "name": "incoming",
            "value": 31.0,
            "formatted_value": "31.0"
          }, {
            "name": "outgoing",
            "value": 37.0,
            "formatted_value": "37.0"
          }, {
            "name": "open",
            "value": 1365.0,
            "formatted_value": "1365.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130415"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 311,
            "formatted_value": "311"
          }, {
            "name": "incoming",
            "value": 1187.0,
            "formatted_value": "1187.0"
          }, {
            "name": "outgoing",
            "value": 1301.0,
            "formatted_value": "1301.0"
          }, {
            "name": "open",
            "value": 1251.0,
            "formatted_value": "1251.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130416"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 309,
            "formatted_value": "309"
          }, {
            "name": "incoming",
            "value": 1352.0,
            "formatted_value": "1352.0"
          }, {
            "name": "outgoing",
            "value": 1287.0,
            "formatted_value": "1287.0"
          }, {
            "name": "open",
            "value": 1316.0,
            "formatted_value": "1316.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130417"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 324,
            "formatted_value": "324"
          }, {
            "name": "incoming",
            "value": 1501.0,
            "formatted_value": "1501.0"
          }, {
            "name": "outgoing",
            "value": 1470.0,
            "formatted_value": "1470.0"
          }, {
            "name": "open",
            "value": 1347.0,
            "formatted_value": "1347.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130418"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 295,
            "formatted_value": "295"
          }, {
            "name": "incoming",
            "value": 1250.0,
            "formatted_value": "1250.0"
          }, {
            "name": "outgoing",
            "value": 1111.0,
            "formatted_value": "1111.0"
          }, {
            "name": "open",
            "value": 1484.0,
            "formatted_value": "1484.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130419"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 311,
            "formatted_value": "311"
          }, {
            "name": "incoming",
            "value": 986.0,
            "formatted_value": "986.0"
          }, {
            "name": "outgoing",
            "value": 991.0,
            "formatted_value": "991.0"
          }, {
            "name": "open",
            "value": 1478.0,
            "formatted_value": "1478.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130420"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 126,
            "formatted_value": "126"
          }, {
            "name": "incoming",
            "value": 20.0,
            "formatted_value": "20.0"
          }, {
            "name": "outgoing",
            "value": 26.0,
            "formatted_value": "26.0"
          }, {
            "name": "open",
            "value": 1472.0,
            "formatted_value": "1472.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130421"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 128,
            "formatted_value": "128"
          }, {
            "name": "incoming",
            "value": 31.0,
            "formatted_value": "31.0"
          }, {
            "name": "outgoing",
            "value": 32.0,
            "formatted_value": "32.0"
          }, {
            "name": "open",
            "value": 1471.0,
            "formatted_value": "1471.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130422"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 333,
            "formatted_value": "333"
          }, {
            "name": "incoming",
            "value": 1151.0,
            "formatted_value": "1151.0"
          }, {
            "name": "outgoing",
            "value": 1190.0,
            "formatted_value": "1190.0"
          }, {
            "name": "open",
            "value": 1436.0,
            "formatted_value": "1436.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130423"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 343,
            "formatted_value": "343"
          }, {
            "name": "incoming",
            "value": 1444.0,
            "formatted_value": "1444.0"
          }, {
            "name": "outgoing",
            "value": 1520.0,
            "formatted_value": "1520.0"
          }, {
            "name": "open",
            "value": 1341.0,
            "formatted_value": "1341.0"
          }
        ]
      }, {
        "key": ["503d63c20c7dea4edc00000d", "20130424"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 398,
            "formatted_value": "398"
          }, {
            "name": "incoming",
            "value": 1885.0,
            "formatted_value": "1885.0"
          }, {
            "name": "outgoing",
            "value": 1940.0,
            "formatted_value": "1940.0"
          }, {
            "name": "open",
            "value": 1279.0,
            "formatted_value": "1279.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076"],
        "dimensions": ["division"],
        "measures": [
          {
            "name": "record",
            "value": 8359,
            "formatted_value": "8359"
          }, {
            "name": "incoming",
            "value": 26286.0,
            "formatted_value": "26286.0"
          }, {
            "name": "outgoing",
            "value": 25634.0,
            "formatted_value": "25634.0"
          }, {
            "name": "open",
            "value": 50038.0,
            "formatted_value": "50038.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130402"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 418,
            "formatted_value": "418"
          }, {
            "name": "incoming",
            "value": 1243.0,
            "formatted_value": "1243.0"
          }, {
            "name": "outgoing",
            "value": 1167.0,
            "formatted_value": "1167.0"
          }, {
            "name": "open",
            "value": 2169.0,
            "formatted_value": "2169.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130403"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 484,
            "formatted_value": "484"
          }, {
            "name": "incoming",
            "value": 1758.0,
            "formatted_value": "1758.0"
          }, {
            "name": "outgoing",
            "value": 1859.0,
            "formatted_value": "1859.0"
          }, {
            "name": "open",
            "value": 2068.0,
            "formatted_value": "2068.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130404"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 432,
            "formatted_value": "432"
          }, {
            "name": "incoming",
            "value": 1776.0,
            "formatted_value": "1776.0"
          }, {
            "name": "outgoing",
            "value": 1767.0,
            "formatted_value": "1767.0"
          }, {
            "name": "open",
            "value": 2077.0,
            "formatted_value": "2077.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130405"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 496,
            "formatted_value": "496"
          }, {
            "name": "incoming",
            "value": 1444.0,
            "formatted_value": "1444.0"
          }, {
            "name": "outgoing",
            "value": 1448.0,
            "formatted_value": "1448.0"
          }, {
            "name": "open",
            "value": 2073.0,
            "formatted_value": "2073.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130406"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 255,
            "formatted_value": "255"
          }, {
            "name": "incoming",
            "value": 20.0,
            "formatted_value": "20.0"
          }, {
            "name": "outgoing",
            "value": 25.0,
            "formatted_value": "25.0"
          }, {
            "name": "open",
            "value": 2068.0,
            "formatted_value": "2068.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130407"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 284,
            "formatted_value": "284"
          }, {
            "name": "incoming",
            "value": 166.0,
            "formatted_value": "166.0"
          }, {
            "name": "outgoing",
            "value": 221.0,
            "formatted_value": "221.0"
          }, {
            "name": "open",
            "value": 2013.0,
            "formatted_value": "2013.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130408"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 501,
            "formatted_value": "501"
          }, {
            "name": "incoming",
            "value": 1410.0,
            "formatted_value": "1410.0"
          }, {
            "name": "outgoing",
            "value": 1386.0,
            "formatted_value": "1386.0"
          }, {
            "name": "open",
            "value": 2037.0,
            "formatted_value": "2037.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130409"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 432,
            "formatted_value": "432"
          }, {
            "name": "incoming",
            "value": 1259.0,
            "formatted_value": "1259.0"
          }, {
            "name": "outgoing",
            "value": 1215.0,
            "formatted_value": "1215.0"
          }, {
            "name": "open",
            "value": 2081.0,
            "formatted_value": "2081.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130410"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 463,
            "formatted_value": "463"
          }, {
            "name": "incoming",
            "value": 1300.0,
            "formatted_value": "1300.0"
          }, {
            "name": "outgoing",
            "value": 1376.0,
            "formatted_value": "1376.0"
          }, {
            "name": "open",
            "value": 2005.0,
            "formatted_value": "2005.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130411"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 442,
            "formatted_value": "442"
          }, {
            "name": "incoming",
            "value": 1814.0,
            "formatted_value": "1814.0"
          }, {
            "name": "outgoing",
            "value": 1767.0,
            "formatted_value": "1767.0"
          }, {
            "name": "open",
            "value": 2052.0,
            "formatted_value": "2052.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130412"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 451,
            "formatted_value": "451"
          }, {
            "name": "incoming",
            "value": 1710.0,
            "formatted_value": "1710.0"
          }, {
            "name": "outgoing",
            "value": 1654.0,
            "formatted_value": "1654.0"
          }, {
            "name": "open",
            "value": 2108.0,
            "formatted_value": "2108.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130413"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 210,
            "formatted_value": "210"
          }, {
            "name": "incoming",
            "value": 48.0,
            "formatted_value": "48.0"
          }, {
            "name": "outgoing",
            "value": 48.0,
            "formatted_value": "48.0"
          }, {
            "name": "open",
            "value": 2108.0,
            "formatted_value": "2108.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130414"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 212,
            "formatted_value": "212"
          }, {
            "name": "incoming",
            "value": 20.0,
            "formatted_value": "20.0"
          }, {
            "name": "outgoing",
            "value": 21.0,
            "formatted_value": "21.0"
          }, {
            "name": "open",
            "value": 2107.0,
            "formatted_value": "2107.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130415"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 327,
            "formatted_value": "327"
          }, {
            "name": "incoming",
            "value": 741.0,
            "formatted_value": "741.0"
          }, {
            "name": "outgoing",
            "value": 537.0,
            "formatted_value": "537.0"
          }, {
            "name": "open",
            "value": 2311.0,
            "formatted_value": "2311.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130416"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 399,
            "formatted_value": "399"
          }, {
            "name": "incoming",
            "value": 1239.0,
            "formatted_value": "1239.0"
          }, {
            "name": "outgoing",
            "value": 1378.0,
            "formatted_value": "1378.0"
          }, {
            "name": "open",
            "value": 2172.0,
            "formatted_value": "2172.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130417"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 382,
            "formatted_value": "382"
          }, {
            "name": "incoming",
            "value": 1997.0,
            "formatted_value": "1997.0"
          }, {
            "name": "outgoing",
            "value": 2017.0,
            "formatted_value": "2017.0"
          }, {
            "name": "open",
            "value": 2134.0,
            "formatted_value": "2134.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130418"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 399,
            "formatted_value": "399"
          }, {
            "name": "incoming",
            "value": 2024.0,
            "formatted_value": "2024.0"
          }, {
            "name": "outgoing",
            "value": 1779.0,
            "formatted_value": "1779.0"
          }, {
            "name": "open",
            "value": 2357.0,
            "formatted_value": "2357.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130419"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 374,
            "formatted_value": "374"
          }, {
            "name": "incoming",
            "value": 1771.0,
            "formatted_value": "1771.0"
          }, {
            "name": "outgoing",
            "value": 1865.0,
            "formatted_value": "1865.0"
          }, {
            "name": "open",
            "value": 2225.0,
            "formatted_value": "2225.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130420"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 160,
            "formatted_value": "160"
          }, {
            "name": "incoming",
            "value": 34.0,
            "formatted_value": "34.0"
          }, {
            "name": "outgoing",
            "value": 36.0,
            "formatted_value": "36.0"
          }, {
            "name": "open",
            "value": 2223.0,
            "formatted_value": "2223.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130421"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 180,
            "formatted_value": "180"
          }, {
            "name": "incoming",
            "value": 150.0,
            "formatted_value": "150.0"
          }, {
            "name": "outgoing",
            "value": 175.0,
            "formatted_value": "175.0"
          }, {
            "name": "open",
            "value": 2185.0,
            "formatted_value": "2185.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130422"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 362,
            "formatted_value": "362"
          }, {
            "name": "incoming",
            "value": 1166.0,
            "formatted_value": "1166.0"
          }, {
            "name": "outgoing",
            "value": 941.0,
            "formatted_value": "941.0"
          }, {
            "name": "open",
            "value": 2392.0,
            "formatted_value": "2392.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130423"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 381,
            "formatted_value": "381"
          }, {
            "name": "incoming",
            "value": 2309.0,
            "formatted_value": "2309.0"
          }, {
            "name": "outgoing",
            "value": 2139.0,
            "formatted_value": "2139.0"
          }, {
            "name": "open",
            "value": 2527.0,
            "formatted_value": "2527.0"
          }
        ]
      }, {
        "key": ["503d64820c7dea4edc000076", "20130424"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 315,
            "formatted_value": "315"
          }, {
            "name": "incoming",
            "value": 887.0,
            "formatted_value": "887.0"
          }, {
            "name": "outgoing",
            "value": 813.0,
            "formatted_value": "813.0"
          }, {
            "name": "open",
            "value": 2546.0,
            "formatted_value": "2546.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6"],
        "dimensions": ["division"],
        "measures": [
          {
            "name": "record",
            "value": 2684,
            "formatted_value": "2684"
          }, {
            "name": "incoming",
            "value": 2793.0,
            "formatted_value": "2793.0"
          }, {
            "name": "outgoing",
            "value": 3033.0,
            "formatted_value": "3033.0"
          }, {
            "name": "open",
            "value": 28771.0,
            "formatted_value": "28771.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130402"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 169,
            "formatted_value": "169"
          }, {
            "name": "incoming",
            "value": 151.0,
            "formatted_value": "151.0"
          }, {
            "name": "outgoing",
            "value": 106.0,
            "formatted_value": "106.0"
          }, {
            "name": "open",
            "value": 1500.0,
            "formatted_value": "1500.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130403"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 166,
            "formatted_value": "166"
          }, {
            "name": "incoming",
            "value": 110.0,
            "formatted_value": "110.0"
          }, {
            "name": "outgoing",
            "value": 114.0,
            "formatted_value": "114.0"
          }, {
            "name": "open",
            "value": 1496.0,
            "formatted_value": "1496.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130404"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 168,
            "formatted_value": "168"
          }, {
            "name": "incoming",
            "value": 148.0,
            "formatted_value": "148.0"
          }, {
            "name": "outgoing",
            "value": 148.0,
            "formatted_value": "148.0"
          }, {
            "name": "open",
            "value": 1496.0,
            "formatted_value": "1496.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130405"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 174,
            "formatted_value": "174"
          }, {
            "name": "incoming",
            "value": 523.0,
            "formatted_value": "523.0"
          }, {
            "name": "outgoing",
            "value": 715.0,
            "formatted_value": "715.0"
          }, {
            "name": "open",
            "value": 1304.0,
            "formatted_value": "1304.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130406"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 111,
            "formatted_value": "111"
          }, {
            "name": "incoming",
            "value": 1.0,
            "formatted_value": "1.0"
          }, {
            "name": "outgoing",
            "value": 3.0,
            "formatted_value": "3.0"
          }, {
            "name": "open",
            "value": 1302.0,
            "formatted_value": "1302.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130407"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 113,
            "formatted_value": "113"
          }, {
            "name": "incoming",
            "value": 7.0,
            "formatted_value": "7.0"
          }, {
            "name": "outgoing",
            "value": 7.0,
            "formatted_value": "7.0"
          }, {
            "name": "open",
            "value": 1302.0,
            "formatted_value": "1302.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130408"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 158,
            "formatted_value": "158"
          }, {
            "name": "incoming",
            "value": 194.0,
            "formatted_value": "194.0"
          }, {
            "name": "outgoing",
            "value": 306.0,
            "formatted_value": "306.0"
          }, {
            "name": "open",
            "value": 1190.0,
            "formatted_value": "1190.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130409"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 137,
            "formatted_value": "137"
          }, {
            "name": "incoming",
            "value": 172.0,
            "formatted_value": "172.0"
          }, {
            "name": "outgoing",
            "value": 173.0,
            "formatted_value": "173.0"
          }, {
            "name": "open",
            "value": 1189.0,
            "formatted_value": "1189.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130410"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 123,
            "formatted_value": "123"
          }, {
            "name": "incoming",
            "value": 132.0,
            "formatted_value": "132.0"
          }, {
            "name": "outgoing",
            "value": 126.0,
            "formatted_value": "126.0"
          }, {
            "name": "open",
            "value": 1195.0,
            "formatted_value": "1195.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130411"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 118,
            "formatted_value": "118"
          }, {
            "name": "incoming",
            "value": 240.0,
            "formatted_value": "240.0"
          }, {
            "name": "outgoing",
            "value": 243.0,
            "formatted_value": "243.0"
          }, {
            "name": "open",
            "value": 1192.0,
            "formatted_value": "1192.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130412"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 116,
            "formatted_value": "116"
          }, {
            "name": "incoming",
            "value": 121.0,
            "formatted_value": "121.0"
          }, {
            "name": "outgoing",
            "value": 105.0,
            "formatted_value": "105.0"
          }, {
            "name": "open",
            "value": 1208.0,
            "formatted_value": "1208.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130413"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 82,
            "formatted_value": "82"
          }, {
            "name": "incoming",
            "value": 7.0,
            "formatted_value": "7.0"
          }, {
            "name": "outgoing",
            "value": 7.0,
            "formatted_value": "7.0"
          }, {
            "name": "open",
            "value": 1208.0,
            "formatted_value": "1208.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130414"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 80,
            "formatted_value": "80"
          }, {
            "name": "incoming",
            "value": 7.0,
            "formatted_value": "7.0"
          }, {
            "name": "outgoing",
            "value": 7.0,
            "formatted_value": "7.0"
          }, {
            "name": "open",
            "value": 1208.0,
            "formatted_value": "1208.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130415"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 109,
            "formatted_value": "109"
          }, {
            "name": "incoming",
            "value": 180.0,
            "formatted_value": "180.0"
          }, {
            "name": "outgoing",
            "value": 156.0,
            "formatted_value": "156.0"
          }, {
            "name": "open",
            "value": 1232.0,
            "formatted_value": "1232.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130416"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 104,
            "formatted_value": "104"
          }, {
            "name": "incoming",
            "value": 58.0,
            "formatted_value": "58.0"
          }, {
            "name": "outgoing",
            "value": 50.0,
            "formatted_value": "50.0"
          }, {
            "name": "open",
            "value": 1240.0,
            "formatted_value": "1240.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130417"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 126,
            "formatted_value": "126"
          }, {
            "name": "incoming",
            "value": 250.0,
            "formatted_value": "250.0"
          }, {
            "name": "outgoing",
            "value": 306.0,
            "formatted_value": "306.0"
          }, {
            "name": "open",
            "value": 1173.0,
            "formatted_value": "1173.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130418"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 98,
            "formatted_value": "98"
          }, {
            "name": "incoming",
            "value": 108.0,
            "formatted_value": "108.0"
          }, {
            "name": "outgoing",
            "value": 68.0,
            "formatted_value": "68.0"
          }, {
            "name": "open",
            "value": 1212.0,
            "formatted_value": "1212.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130419"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 112,
            "formatted_value": "112"
          }, {
            "name": "incoming",
            "value": 135.0,
            "formatted_value": "135.0"
          }, {
            "name": "outgoing",
            "value": 139.0,
            "formatted_value": "139.0"
          }, {
            "name": "open",
            "value": 1206.0,
            "formatted_value": "1206.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130420"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 71,
            "formatted_value": "71"
          }, {
            "name": "incoming",
            "value": 12.0,
            "formatted_value": "12.0"
          }, {
            "name": "outgoing",
            "value": 31.0,
            "formatted_value": "31.0"
          }, {
            "name": "open",
            "value": 1182.0,
            "formatted_value": "1182.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130421"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 74,
            "formatted_value": "74"
          }, {
            "name": "incoming",
            "value": 16.0,
            "formatted_value": "16.0"
          }, {
            "name": "outgoing",
            "value": 34.0,
            "formatted_value": "34.0"
          }, {
            "name": "open",
            "value": 1161.0,
            "formatted_value": "1161.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130422"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 88,
            "formatted_value": "88"
          }, {
            "name": "incoming",
            "value": 77.0,
            "formatted_value": "77.0"
          }, {
            "name": "outgoing",
            "value": 46.0,
            "formatted_value": "46.0"
          }, {
            "name": "open",
            "value": 1192.0,
            "formatted_value": "1192.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130423"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 97,
            "formatted_value": "97"
          }, {
            "name": "incoming",
            "value": 79.0,
            "formatted_value": "79.0"
          }, {
            "name": "outgoing",
            "value": 77.0,
            "formatted_value": "77.0"
          }, {
            "name": "open",
            "value": 1193.0,
            "formatted_value": "1193.0"
          }
        ]
      }, {
        "key": ["503d648e0c7dea4edc0001e6", "20130424"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 90,
            "formatted_value": "90"
          }, {
            "name": "incoming",
            "value": 65.0,
            "formatted_value": "65.0"
          }, {
            "name": "outgoing",
            "value": 66.0,
            "formatted_value": "66.0"
          }, {
            "name": "open",
            "value": 1190.0,
            "formatted_value": "1190.0"
          }
        ]
      }, {
        "key": [null],
        "dimensions": ["division"],
        "measures": [
          {
            "name": "record",
            "value": 32,
            "formatted_value": "32"
          }, {
            "name": "incoming",
            "value": 39.0,
            "formatted_value": "39.0"
          }, {
            "name": "outgoing",
            "value": 20.0,
            "formatted_value": "20.0"
          }, {
            "name": "open",
            "value": 34.0,
            "formatted_value": "34.0"
          }
        ]
      }, {
        "key": [null, "20130402"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130403"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130404"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130405"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130406"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130407"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130408"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130409"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130410"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130411"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130412"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130413"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130414"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130415"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130416"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130417"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 6,
            "formatted_value": "6"
          }, {
            "name": "incoming",
            "value": 9.0,
            "formatted_value": "9.0"
          }, {
            "name": "outgoing",
            "value": 9.0,
            "formatted_value": "9.0"
          }, {
            "name": "open",
            "value": 0.0,
            "formatted_value": "0.0"
          }
        ]
      }, {
        "key": [null, "20130418"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "2",
            "formatted_value": "2"
          }, {
            "name": "outgoing",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130423"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "incoming",
            "value": "1",
            "formatted_value": "1"
          }, {
            "name": "outgoing",
            "value": "0",
            "formatted_value": "0"
          }, {
            "name": "open",
            "value": "1",
            "formatted_value": "1"
          }
        ]
      }, {
        "key": [null, "20130424"],
        "dimensions": ["division", "snapshot_date"],
        "measures": [
          {
            "name": "record",
            "value": 9,
            "formatted_value": "9"
          }, {
            "name": "incoming",
            "value": 27.0,
            "formatted_value": "27.0"
          }, {
            "name": "outgoing",
            "value": 10.0,
            "formatted_value": "10.0"
          }, {
            "name": "open",
            "value": 17.0,
            "formatted_value": "17.0"
          }
        ]
      }
    ],
    "totals": {
      "key": [],
      "dimensions": [],
      "measures": [
        {
          "name": "record",
          "value": 18034,
          "formatted_value": "18034"
        }, {
          "name": "incoming",
          "value": 52812.0,
          "formatted_value": "52812.0"
        }, {
          "name": "outgoing",
          "value": 52234.0,
          "formatted_value": "52234.0"
        }, {
          "name": "open",
          "value": 109642.0,
          "formatted_value": "109642.0"
        }
      ]
    },
    "measure_names": ["record", "incoming", "outgoing", "open"],
    "cube": "work_item_snapshot",
    "slicer": [],
    "filters": ["dimension::snapshot_date::key::gt::20130401"]
  };

}).call(this);
