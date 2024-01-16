package ma.ensaj.service;

import ma.ensaj.dto.UserDto;
import ma.ensaj.entities.User;

public interface UserService {
    void saveUser(UserDto userDto);

    User findUserByEmail(String email);
}
