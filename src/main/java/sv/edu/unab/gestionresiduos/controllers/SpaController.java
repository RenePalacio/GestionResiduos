package sv.edu.unab.gestionresiduos.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaController {

    @RequestMapping(value = {
        "/{path:[^\\.]*}"            // Cualquier ruta que no contenga un punto (no es archivo
    })
    public String redirect() {
        return "forward:/index.html";
    }
}