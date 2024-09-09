import mysql.connector
from mysql.connector import errorcode

# Database configuration
config = {
    "user": "root",  # Change to your MySQL username
    "password": "S1a2i3$$",  # Change to your MySQL password
    "host": "localhost",
    "database": "institution_db",  # This is the common database where you will create institution-specific tables
}


# Function to create tables for a specific institution
def create_tables_for_institution(cursor, institution_name):
    # SQL statements to create tables dynamically based on the institution name
    tables = {
        "users": (
            f"CREATE TABLE `{institution_name}_users` ("
            "  `id` int(11) NOT NULL AUTO_INCREMENT,"
            "  `email` varchar(255) NOT NULL,"
            "  `password` varchar(255) NOT NULL,"
            "  PRIMARY KEY (`id`),"
            "  UNIQUE KEY `email` (`email`)"
            ") ENGINE=InnoDB"
        ),
        # Add other tables similarly
    }

    for table_name, table_description in tables.items():
        try:
            print(
                f"Creating table `{table_name}` for institution `{institution_name}`: ",
                end="",
            )
            cursor.execute(table_description)
            print("OK")
        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                print(f"Table `{table_name}` already exists.")
            else:
                print(f"Failed creating table `{table_name}`: {err}")
                exit(1)


def main():
    institution_name = input("Enter the institution name: ").strip()

    try:
        # Connect to the MySQL server
        conn = mysql.connector.connect(
            user=config["user"], password=config["password"], host=config["host"]
        )
        cursor = conn.cursor()

        # Use the existing database
        cursor.execute(f"USE {config['database']}")

        # Create tables for the specified institution
        create_tables_for_institution(cursor, institution_name)

        cursor.close()
        conn.close()
        print("Tables created successfully.")

    except mysql.connector.Error as err:
        print(f"Error: {err}")
        exit(1)


if __name__ == "__main__":
    main()
