import tornado
from logger import error_logger as elog, info_logger as ilog
from handlers.core import Core
from datetime import datetime


class PatientInsuranceHandler(Core):


    async def get(self):
        """ 'Get Detail of a Ticket'
        
        Params:
           ...

        Exceptions:
            MissingArgumentError: if any of the mandatory arguments are missing

        Error Codes:
            ...

        Returns:
            response(json): json response 
    
        """

        self._handler = "snapshot"

        payload = {}

        doc = await self.db.master.find_one()

        p = doc["policy"]
        if p is not None:
            payload = p

        self._res_code = "PAT_INS_SS_01"
        self.send_response(payload)
