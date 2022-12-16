<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->type = 'superuser';
        $user->name = 'Emerson';
        $user->username = 'administrador';
        $user->email = 'nahuinlla101131@example.com';
        $user->password = bcrypt('123456');

        $user->firstname = 'Emerson';
        $user->middlename = null;
        $user->lastname = 'Ñahuinlla Velásquez';
        $user->gender = 'male';
        $user->birthdate = '1993-07-25';
        $user->address = 'Av Canada SN Abancay Abancay Apurímac';
        $user->save();

        $user = new User;
        $user->type = 'user';
        $user->name = 'Zeilu';
        $user->username = 'zeilu';
        $user->email = 'zeilu@gmail.com';
        $user->password = bcrypt('123456');

        $user->firstname = 'Zeilu';
        $user->middlename = 'Massiel';
        $user->lastname = 'Moreano Falcon';
        $user->gender = 'female';
        $user->birthdate = null;
        $user->address = 'Av panamericana SN Abancay Abancay Apurímac';
        $user->save();

        $user = new User;
        $user->type = 'user';
        $user->name = 'Luis';
        $user->username = 'Luis';
        $user->email = 'luis@gmail.com';
        $user->password = bcrypt('123456');

        $user->firstname = 'luis';
        $user->middlename = 'Alberto';
        $user->lastname = 'Pfuño Alccahuamani';
        $user->gender = 'male';
        $user->birthdate = null;
        $user->address = 'Av panamericana SN Abancay Abancay Apurímac';
        $user->save();

        $user = new User;
        $user->type = 'user';
        $user->name = 'Jhon';
        $user->username = 'Jhon';
        $user->email = 'Jhon@gmail.com';
        $user->password = bcrypt('123456');

        $user->firstname = 'John';
        $user->middlename = 'Franklin';
        $user->lastname = 'Romero Ramos';
        $user->gender = 'male';
        $user->birthdate = null;
        $user->address = 'Av panamericana SN Abancay Abancay Apurímac';
        $user->save();
    }
}
