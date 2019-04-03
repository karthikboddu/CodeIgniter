<?php
include '/var/www/html/codeigniter/application/vendor/autoload.php';
class Fundoo extends TestCase
{
    protected $client;

    public function setUp()
    {
        $this->http = new GuzzleHttp\Client(['base_uri' => 'http://localhost/codeigniter/'], array(
            'request.options' => array(
                'exceptions' => false,
            ),
        ));

    }

    // public function testPost()
    // {
    //     $request = $this->http->post('testlog', [
    //         'form_params' => [
    //             'Emailid' => 'karthik.184@gmail.com',
    //             'password' => '123546',
    //         ],
    //     ]);


    //     $stream = $request->getBody();
    //     $contents = json_decode($stream);
    //     // $res = $contents->message;
    //     var_dump($contents);
    //     $this->assertEquals("200", $res);
    //     // $request = $this->http->post('loginto',[
    //     //     'form_params' => [
    //     //         'Emailid' => 'karthikb5566@gmail.com',

    //     //     ]
    //     // ]);
    //     // // var_dump($request);

    //     // $this->assertEquals(400, $request->getStatusCode(), 'Missing phone parameter should return 400 error');

    // }


    public function testRegister(){
        $request = $this->http->post('register', [
            'form_params' => [
                'firstName'=>'barry',
                'lastName'=>'allen',
                'Emailid' => 'barryallen@gmail.com',
                'password' => 'flash',
            ],
        ]);

        $stream = $request->getBody();
        $contents = json_decode($stream);
        $res = $contents->status;
        // var_dump($contents);
        if($res=="200"){
            
        }
        $this->assertEquals("200", $res,'Email already exists');  
        // else if($res="201"){
        //     $this->assertEquals("201", $res, 'Email already exists');
        // }
        

    }


    public function testlogin(){
        $request = $this->http->post('loginto',[
            'form_params' => [
                'Emailid'=>'karthikb5566@gmail.com',
                'password'=>'123456'
            ],
        ]);

        $stream = $request->getbody();
        $contents = json_decode($stream);
        $res = $contents->message;
        $this->assertEquals("200", $res,'password incorrect');
    }
}
