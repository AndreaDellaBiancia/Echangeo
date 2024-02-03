<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/api/', name: 'app_main')]
    public function index(): Response
    {
        $array = [
            "name" => "Andrea",
            "bar" => "foo",
        ];
        //Get the first 5 templates and store them in $homeTemplates 
        
        //We return an object that contains the 5 templates 
        return $this->json($array, 200);

        /* return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]); */
    }
}