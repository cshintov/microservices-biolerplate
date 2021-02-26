<?php

namespace Api\Modules\Patient;

/*
 *  Patient Class
 *  Invoked only for loading patient basic details
 * 
 *  @author "Sony George" <sony@thinkberries.com>
 */
class Patient extends \Api\Core\Container\Controller {

    // default error code
    private $errorCode = "INVALID_REQUEST";
    private $statusText = "";

    /*
     *  Constructor
     * 
     *  @param array $router
     * 
     * @return void
     */ 
    public function __construct($router)
    {
        parent::__construct($router);
        $this->model = new \Api\Modules\Patient\PatientModel($this->getFilteredData(), $this->container);
        $this->model->setDataSignature();
    }

    /*
     *  Default method to get patient
     *  
     *  @uri: /patient/basic
     *  @method: GET | POST
     *  @media-type: application/json
     * 
     *  @render array $payload
     */
    public function index() 
    {
        if (!$this->isValid()) {
            $this->setError("INVALID_REQUEST");
        }

        $data = $this->getFilteredData();
        $patientInfo = $this->model->getPatientByID($data["pid"]);
        $this->setDataArray($patientInfo);
        $this->render();
    }


    /*
     *  Method to check valid input
     *  
     *  @render array $payload
     */
    private function isValid()
    {
        $data = $this->getFilteredData();

        $logger = $this->container["logger"];

        $pid = $data["pid"] ?: "";

        if (!$pid) {
            $this->errorCode = "REQUIRED PID";
            $logger::warning("PID should not be none");
            return false;
        }

        if (!is_numeric($pid)) {
            $this->errorCode = "INVALID PID";
            $logger::warning("PID should be a valid number");
            return false;
        }

        return true;
    }

}