<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', function(Request $request){
    if($request->email == 'email@gmail.com' && $request->password == 'pass'){
        return response()->json(
            [
                'fullname' => 'Wavamuno Brandon Elijah',
                'username' => 'Brandon',
                'email' => 'brandon@gmail.com',
                'phone' => '0753659098',
                'password' => 'brandon093#_334',
                'token' => '343kfke/dfdkfk#ero76_erke',
                'level' => 3,
            ]
        );
    }else{
        return response()->json(
            [
                'error' => 'Wrong Credentials',
            ]
        );
    }
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
