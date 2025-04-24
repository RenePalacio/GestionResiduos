package sv.edu.unab.gestionresiduos.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sv.edu.unab.gestionresiduos.models.User;
import sv.edu.unab.gestionresiduos.repositories.UserRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }


}
