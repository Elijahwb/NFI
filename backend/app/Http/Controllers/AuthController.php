<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        //check email
        $user = User::where('email', $fields['email'])->first();

        //check password
        if(!$user || !Hash::check($fields['password'], $user->password)){
            return response()->json([
                'error' => 'username or password incorrect!'
            ]);
        }

        $response = [
            'user' => $user,
        ];

        $response['user']['pass'] = $fields['password'];

        return response()->json($response);
    }

    public function updateUsernamePassword(Request $request){
        $fields = $request->validate([
            'id' => 'required',
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        User::where('id', $fields['id'])->update([
            'username' => $fields['username'],
            'password' => Hash::make($fields['password']),
        ]);

        $user = User::find($fields['id']);

        $response = [
            'user' => $user
        ];

        $response['user']['pass'] = $fields['password'];

        return response()->json($response);
    }
}
