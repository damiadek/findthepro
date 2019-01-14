<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServicesController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $array =  array_filter([
            [
                "id" => 1,
                "name" => "John Doe",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 3,
                "specialization" => "electronics"
            ],
            [
                "id" => 2,
                "name" => "Jane Doe",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 5,
                "specialization" => "electronics"
            ],
            [
                "id" => 3,
                "name" => "Michelle Fster",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 4,
                "specialization" => "electronics"
            ],
            [
                "id" => 4,
                "name" => "John Wayne",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 1,
                "specialization" => "electronics"
            ],
            [
                "id" => 5,
                "name" => "Mark Donovan",
                "avatar" => "man.jpg",
                "sex" => "Male",
                "rating" => 3,
                "specialization" => "electronics"
            ],
            [
                "id" => 6,
                "name" => "Martin Bosco",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 3,
                "specialization" => "plumbing"
            ],
            [
                "id" => 2,
                "name" => "Jane Trevor",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 3,
                "specialization" => "plumbing"
            ],
            [
                "id" => 3,
                "name" => "Michelle Fster",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 2,
                "specialization" => "plumbing"
            ],
            [
                "id" => 4,
                "name" => "John Wayne",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 1,
                "specialization" => "plumbing"
            ],
            [
                "id" => 4,
                "name" => "John Wayne",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 1,
                "specialization" => "plumbing"
            ],
            [
                "id" => 5,
                "name" => "Mark Donovan",
                "avatar" => "man.jpg",
                "sex" => "Male",
                "rating" => 3,
                "specialization" => "plumbing"
            ],
            [
                "id" => 6,
                "name" => "Martin Bosco",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 3,
                "specialization" => "teaching"
            ],
            [
                "id" => 2,
                "name" => "Jane Trevor",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 3,
                "specialization" => "teaching"
            ],
            [
                "id" => 3,
                "name" => "Michelle Fster",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 2,
                "specialization" => "teaching"
            ],
            [
                "id" => 4,
                "name" => "John Wayne",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 1,
                "specialization" => "teaching"
            ],
            [
                "id" => 3,
                "name" => "Michelle Fster",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 2,
                "specialization" => "carpentry"
            ],
            [
                "id" => 4,
                "name" => "John Wayne",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 1,
                "specialization" => "carpentry"
            ],
            [
                "id" => 4,
                "name" => "John Wayne",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 1,
                "specialization" => "cleaning"
            ],
            [
                "id" => 3,
                "name" => "Michelle Fster",
                "avatar" => "woman.jpg",
                "sex" => "Female",
                "rating" => 2,
                "specialization" => "cleaning"
            ],
            [
                "id" => 4,
                "name" => "John Wayne",
                "sex" => "Male",
                "avatar" => "man.jpg",
                "rating" => 1,
                "specialization" => "cleaning"
            ]


        ],function($array) use ($request){
            return $array['specialization'] === $request->input('specialization');
        });

        return array_values($array);
    }
}
