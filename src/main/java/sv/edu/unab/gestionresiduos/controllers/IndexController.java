package sv.edu.unab.gestionresiduos.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping(value = {
        "/{path:^(?!api|v3|swagger-ui|assets|favicon\\.ico|index\\.html|.*\\..*$).*$}",
        "/**/{path:^(?!api|v3|swagger-ui|assets|favicon\\.ico|index\\.html|.*\\..*$).*$}"
    })
    public String redirect() {
        return "forward:/index.html";
    }
}
