<?php

/**
 * Sign the data in the given dictionary and return a new hash
 * that includes the signature. 
 *
 * @param $data Is a dictionary that contains the values to be signed
 * @param $salt Is the salt parameter passed via the cvm_salt GET parameter
 * @param $pkey Is the path to the private key file that will be used to calculate the signature
 */
function sign_data( $data, $salt, $pkey ) {

    // Sort keys
    ksort( $data );

    // Calculate buffer to sign
    $buffer = "";
    foreach ($data as $k => $v) {
        
        // The boolean is a special case and should also be
        // updated to the data array
        if (is_bool($v)) {
           $v = $data[$k] = ( $v ? "1" : "0" );
        }
        
        // Update buffer
        $buffer .= strtolower($k) . "=" . rawurlencode( $v ) . "\n";
    }

    // Append salt
    $buffer.=$salt;

    // Sign data using OpenSSL_Sign
    openssl_sign( $buffer, $signature, "file://$pkey", "sha512" );
    $data['signature'] = base64_encode($signature);

    // Return hash
    return $data;
    
} 

/*
$data = array(
    'name' => 'LHC@Home',
    'secret' => 'cernvm',
    'ram' => 1024,
    'cpus' => 1,
    'disk' => 10240,
    'userData' => '${boinc_config}',
    'diskURL' => 'http://dl.dropboxusercontent.com/u/27667029/cors-enabled.vdi.gz',
    'diskChecksum' => '5b0e2a763cef752420ee79e5ea2fa41c7b4a43788b1b45bacc58e974ebac70c3',
    'flags'=> 12
);
*/
$data = array(
    'name' => 'LHC@Home-Micro',
    'secret' => 'cernvm',
    'ram' => 1024,
    'cpus' => 1,
    'disk' => 10240,
    'userData' => "[amiconfig]\nplugins=cernvm\n[cernvm]\ncontextualization_key=873d5414e10945109bc4cd9315aff967\n",
    'version' => '1.11',
    'flags'=> 1 
);

echo json_encode( sign_data( $data, $_GET['cvm_salt'], "C:/Users/icharala/Local/Shared/private.pem" ) );


?>