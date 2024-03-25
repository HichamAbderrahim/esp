<?php

use Illuminate\Support\Facades\Route;

Route::middleware('guest')->prefix('auth')->group(function (){
    Route::view('/sign-in', 'auth.sign_in')->name('sign-in');
    
});


Route::view('/', 'home')->name('home');

// Route::middleware('auth')->group(function (){

//      Route::view('/', 'home')->name('home');

//  });
