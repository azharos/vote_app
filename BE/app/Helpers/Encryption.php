<?php 
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;

if(!function_exists('enc')) 
{
	function enc($var) 
	{
		return Crypt::encryptString($var);
	}
}

if(!function_exists('dec')) 
{
	function dec($var) 
	{
		try 
		{
		    return Crypt::decryptString($var);
		} 
		catch (DecryptException $e) 
		{
		    return '';
		}
	}
}