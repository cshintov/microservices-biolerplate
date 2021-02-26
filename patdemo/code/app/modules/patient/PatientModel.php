<?php

namespace Api\Modules\Patient;

/*
 *  Fruits Model Class
 *  Invoked only by Fruits Controller class.
 * 
 *  @author "Sony George" <sony@thinkberries.com>
 */
class PatientModel extends \Api\Core\Container\Model implements \Api\Core\Container\DataSignature
{

    public $dataSignature = array();

    /*
     *  Model method to get a specific fruit
     * 
     *  @return array $result
     */ 
    public function getPatientByID($patientID)
    {
        $query = "SELECT pid, name, facility, age, patient_type, ssn, gender, lang, dob, phone, address
		          FROM patients p
		          WHERE pid = $patientID";
                  
        $rs = $this->query($query);
        $res = $rs->fetch(\PDO::FETCH_ASSOC);

        $result = $this->validateResult($res, $this->dataSignature);
        return $result;
    }

    /*
     *  Set data signature
     * 
     *  @return void
     */
    public function setDataSignature() 
    {
        $this->dataSignature = array(
            "pid"           => array("required" => 1, "type" => "int"),
	        "name"          => array("required" => 1, "type" => "string"),
	        "faiclity"      => array("required" => 1, "type" => "string"),
	        "age"           => array("required" => 0, "type" => "int"),
	        "patient_type"  => array("required" => 1, "type" => "string"),
	        "ssn"           => array("required" => 1, "type" => "int"),
	        "gender"        => array("required" => 0, "type" => "string"),
	        "lang"          => array("required" => 0, "type" => "string"),
	        "dob"           => array("required" => 0, "type" => "string"),
	        "phone"         => array("required" => 0, "type" => "int"),
	        "address"       => array("required" => 0, "type" => "string"),
        );
    }
}