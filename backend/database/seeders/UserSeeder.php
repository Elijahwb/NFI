<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => "Namukwaya Dorothy",
            'username' => "Dorothy",
            'phone' => "0757273301",
            'email' => "dorothynamukwaya1@gmail.com",
            'level' => 1,
            'password' => Hash::make("password"),
        ]);
        User::create([
            'name' => "Nasande Lovinsa",
            'username' => "Lovinsa",
            'phone' => "0755045156",
            'email' => "lovinsanasande@gmail.com",
            'level' => 1,
            'password' => Hash::make("password"),
        ]);
        User::create([
            'name' => "Katwesige Mary Gorret",
            'username' => "Mary",
            'phone' => "0781432948",
            'email' => "mkatwesige9@gmail.com",
            'level' => 1,
            'password' => Hash::make("password"),
        ]);
        User::create([
            'name' => "Ahikiriza Elizabeth",
            'username' => "Elizabeth",
            'phone' => "0707365141",
            'email' => "elizabeth@gmail.com",
            'level' => 1,
            'password' => Hash::make("password"),
        ]);
    }
}
