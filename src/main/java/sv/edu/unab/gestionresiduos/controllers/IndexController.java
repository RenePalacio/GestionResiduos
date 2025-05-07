package sv.edu.unab.gestionresiduos.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping("/")
    public String home() {
        return "redirect:/index.html";
    }
}
