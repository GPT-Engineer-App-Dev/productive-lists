import { Box, Text } from '@chakra-ui/react';

const PrivacyPolicy = () => (
  <Box p={5}>
    <Text fontSize="xl" fontWeight="bold">Privacy Policy</Text>
    <Text mt={4}>
      This Privacy Policy outlines how we collect, use, and protect your personal information when you use our Todo App. We respect your privacy and are committed to protecting it through our compliance with this policy.
    </Text>
    <Text mt={4}>
      Information Collection: We collect several types of information from and about users of our App, including information by which you may be personally identified, such as name, postal address, e-mail address, and telephone number.
    </Text>
    <Text mt={4}>
      Use of Information: The information we collect is used to provide and improve our services. We may also use your information to contact you about our own goods and services that may be of interest to you.
    </Text>
    <Text mt={4}>
      Data Security: We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
    </Text>
    <Text mt={4}>
      Changes to Our Privacy Policy: It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the App home page.
    </Text>
  </Box>
);

export default PrivacyPolicy;