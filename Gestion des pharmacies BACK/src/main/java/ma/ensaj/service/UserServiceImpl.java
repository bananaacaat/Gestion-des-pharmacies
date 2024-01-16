package ma.ensaj.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ma.ensaj.dto.UserDto;
import ma.ensaj.entities.Pharmacie;
import ma.ensaj.entities.Role;
import ma.ensaj.entities.User;
import ma.ensaj.repository.PharmacieRepository;
import ma.ensaj.repository.RoleRepository;
import ma.ensaj.repository.UserRepository;
import ma.ensaj.repository.ZoneRepository;
import ma.ensaj.util.TbConstants;

import java.util.Arrays;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ZoneRepository zrepository;


    @Autowired
    private PharmacieRepository repository;

    @Override
    public void saveUser(UserDto userDto) {
        Role role = roleRepository.findByName(TbConstants.Roles.USER);

        if (role == null)
            role = roleRepository.save(new Role(TbConstants.Roles.USER));

        User user = new User(userDto.getName(), userDto.getEmail(), passwordEncoder.encode(userDto.getPassword()),
                Arrays.asList(role));
        Pharmacie ph = new Pharmacie("nom a définir", "adresse a définir", 33.11, -8.11, zrepository.findById(1), "non valide");
        
        repository.save(ph);
        user.setPharmacie(ph);
        
        userRepository.save(user);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
