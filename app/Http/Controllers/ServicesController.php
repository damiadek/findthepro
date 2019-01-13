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
                "rating" => 5,
                "specialization" => "electronics"
            ],
            [
                "id" => 2,
                "name" => "John Doe",
                "sex" => "Male",
                "rating" => 3,
                "specialization" => "electronics"
            ],
            [
                "id" => 3,
                "name" => "John Doe",
                "sex" => "Male",
                "rating" => 4,
                "specialization" => "cleaning"
            ],
            [
                "id" => 4,
                "name" => "John Doe",
                "sex" => "Male",
                "rating" => 4,
                "specialization" => "plumbing"
            ],
            [
                "id" => 5,
                "name" => "John Doe",
                "sex" => "Male",
                "rating" => 2,
                "specialization" => "plumbing"
            ]
            ],function($array) use ($request){
                return $array['specialization'] === $request->input('specialization');
            }
        );

        return array_values($array);
    }
}
