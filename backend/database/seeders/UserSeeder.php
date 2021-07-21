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
            'name' => "Wavamuno Brandon Elijah",
            'username' => "Brandon",
            'phone' => "0753659098",
            'email' => "brandonelijah099@gmail.com",
            'level' => 1,
            'password' => Hash::make("password"),
        ]);
    }
}
