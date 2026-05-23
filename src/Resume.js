import {
    Document,
    Page,
    Text,
    View,
    Image,
    Link,
    StyleSheet
} from "@react-pdf/renderer";

export default function Resume({ headerData, educations, skills, trainings, certs, experiences, references }) {

    const styles = StyleSheet.create({

        page: {
            padding: 10,
            backgroundColor: "#ffffff",
            fontSize: 11,
            fontFamily: "Helvetica"
        },

        /* HEADER */

        headerContainer: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgb(0, 78, 104)",
            padding: 20,
        },

        profileImage: {
            width: 90,
            height: 90,
            borderRadius: 50,
            objectFit: "cover",
            marginRight: 20
        },

        infoContainer: {
            flex: 1
        },

        name: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 6,
            color: "#ffffff"
        },

        contactRow: {
            flexDirection: 'row',
            marginBottom: 4
        },

        contactLabel: {
            width: 55,
            fontWeight: 'bold',
            color: '#ffffff'
        },

        contactText: {
            color: '#ffffff'
        },

        /* SECTION */

        section: {
            marginBottom: 0,
        },

        sectionTitle: {
            fontSize: 16,
            fontWeight: "bold",
            padding: 10,
            textAlign: "center",
            backgroundColor: "rgb(255, 255, 255)",
            color: "#000000"
        },

        /* TABLE */

        table: {
            width: "100%",
        },

        tableHeader: {
            flexDirection: "row",
            backgroundColor: "rgb(0, 52, 70)",
        },

        tableHeaderCell: {
            flex: 1,
            padding: 10,
            fontWeight: "bold",
            fontSize: 11,
            color: "#ffffff"
        },

        tableRow: {
            flexDirection: "row",
            borderBottom: "1 solid #e5e7eb",
            backgroundColor: "#f9f9f9"
        },

        tableCell: {
            flex: 1,
            padding: 10,
            fontSize: 10,
            color: "#374151"
        },

        link: {
            flex: 1,
            padding: 10,
            fontSize: 10,
            color: "rgb(0, 145, 193)",
            textDecoration: "none",
        },

        /* LIST */

        list: {
            marginTop: 2,
        },

        listItem: {
            backgroundColor: '#f9f9f9',
            marginBottom: 2,
            padding: 10,
            border: '1 solid #e5e7eb',
        },

        itemName: {
            color: 'rgb(0, 94, 126)',
            fontSize: 11,
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: "center",
        },

        itemList: {
            color: '#333333',
            fontSize: 10,
            textAlign: "center",
        }

    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* HEADER */}

                <View style={styles.headerContainer}>
                    <Image
                        style={styles.profileImage}
                        src={headerData.image}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>
                            {headerData.name}
                        </Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>
                                Phone
                            </Text>
                            <Text style={styles.contactText}>
                                : {headerData.phone}
                            </Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>
                                Email
                            </Text>
                            <Text style={styles.contactText}>
                                : {headerData.email}
                            </Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>
                                Portfolio Website
                            </Text>
                            <Text style={styles.contactText}>
                                : {headerData.portfolio}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* EDUCATION TABLE */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Education
                    </Text>
                    <View style={styles.table}>

                        {/* HEADER */}

                        <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderCell}>
                                Date
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                School Name
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Field of Study
                            </Text>
                        </View>

                        {/* ROWS */}

                        {educations.map((education) => (
                            <View key={education.id} style={styles.tableRow}>
                                <Text style={styles.tableCell}>
                                    {education.date}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {education.school_name}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {education.field_of_study}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* TRAINING TABLE */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Training
                    </Text>
                    <View style={styles.table}>

                        {/* HEADER */}

                        <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderCell}>
                                Date
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Programme Name
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Field
                            </Text>
                        </View>

                        {/* ROWS */}

                        {trainings.map((training) => (
                            <View key={training.id} style={styles.tableRow}>
                                <Text style={styles.tableCell}>
                                    {training.date}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {training.programme_name}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {training.field}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* CERTIFICATIONS TABLE */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Certifications
                    </Text>
                    <View style={styles.table}>

                        {/* HEADER */}

                        <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderCell}>
                                Date
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Name
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Link
                            </Text>
                        </View>

                        {/* ROWS */}

                        {certs.map((cert) => (
                            <View key={cert.id} style={styles.tableRow}>
                                <Text style={styles.tableCell}>
                                    {cert.date}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {cert.name}
                                </Text>
                                <Link style={styles.link} src={cert.link}>
                                    {cert.link.match(/.{1,40}/g).join('\n')}
                                </Link>
                            </View>
                        ))}
                    </View>
                </View>

                {/* SKILLS LIST */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Skills
                    </Text>
                    {skills.map((skill) => (
                        <View style={styles.list}>
                            <View key={skill.id} style={styles.listItem}>
                                <Text style={styles.itemName}>{skill.name}</Text>
                                <Text style={styles.itemList}>{skill.list}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* EXPERIENCES TABLE */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Experiences
                    </Text>
                    <View style={styles.table}>

                        {/* HEADER */}

                        <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderCell}>
                                Date
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Position
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Company
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Description
                            </Text>
                        </View>

                        {/* ROWS */}

                        {experiences.map((experience) => (
                            <View key={experience.id} style={styles.tableRow}>
                                <Text style={styles.tableCell}>
                                    {experience.date}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {experience.position}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {experience.company}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {experience.description}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* REFERENCES TABLE */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        References
                    </Text>
                    <View style={styles.table}>

                        {/* HEADER */}

                        <View style={styles.tableHeader}>
                            <Text style={styles.tableHeaderCell}>
                                Profile
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Workplace
                            </Text>
                            <Text style={styles.tableHeaderCell}>
                                Contact
                            </Text>
                        </View>

                        {/* ROWS */}

                        {references.map((reference) => (
                            <View key={reference.id} style={styles.tableRow}>
                                <Text style={styles.tableCell}>
                                    {reference.name} {"\n"}
                                    Position: {reference.position}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {reference.company} {"\n\n"}
                                    {reference.address}
                                </Text>
                                <Text style={styles.tableCell}>
                                    Email: {reference.email} {"\n"}
                                    Office Number: {reference.office_number}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

            </Page>
        </Document>
    );
}