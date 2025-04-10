import Footer from "../../UI/GeneralSections/footer";
import Banner from "../../UI/ProjectDetailsPage/Banner";
import FormSection from "../../UI/ProjectDetailsPage/FormSection";
import Header from "../../UI/ProjectDetailsPage/Header";
import SectionWrapper from "../../UI/ProjectDetailsPage/SectionWrapper";

// const ProjectData = {
//   project: {
//     _id: "66e3dadcebd0fa49474c0163",
//     metaTitle: "Prestige Raintree Park | Apartments Whitefield Bangalore",
//     metaKeyword:
//       " Prestige Raintree Park, Prestige Raintree Park Varthur Kodi, Prestige Raintree Park Whitefield, Prestige Raintree Park Bangalore, Prestige Raintree Park Floor Plan, Prestige Raintree Park Price List, 3 BHK Apartments in Prestige Raintree Park , 4 BHK Apartments in Prestige Raintree Park, 5 BHK Apartments in Prestige Raintree Park",
//     metaDescription:
//       "Prestige Raintree Park Whitefield Bangalore offers 3/4/5 BHK apartments with luxurious amenities. Contact us today to get the floor plan, and price list - Visit Now",
//     projectName: "Prestige Raintree Park",
//     projectAddress: "Whitefield, Bangalore",
//     state: "Karnataka",
//     cityLocation: "bangalore",
//     projectConfiguration: "3, 4 & 5 BHK",
//     projectBy: "prestige-group",
//     projectPrice: "2.65 Cr",
//     ivr_no: "72486 72486",
//     locationMap: "star_estate/projects/Screenshot_20240913_115459.webp",
//     rera_no: "PRM/KA/RERA/1251/446/PR/270824/006981",
//     rera_qr: "star_estate/projects/QR1.webp",
//     reraWebsite: "https://rera.karnataka.gov.in",
//     slugURL: "prestige-raintree-park",
//     status: true,
//   },
//   contentSEO: [
//     {
//       briefDescription:
//         "<p>Score a prestigious lifestyle affluently in one of the most coveted locales of Bangalore...</p>",
//       description:
//         "<h2>Prestige Raintree Park Floor Plans crafts Infinite Joy</h2><p>A Bangalore-based developer, Prestige...</p>",
//     },
//   ],
//   quickDetails: [
//     {
//       heading: "Unit Type",
//       data: "3, 4 & 5 BHK",
//     },
//   ],
//   brochureWalkthrough: [
//     {
//       walkthrough:
//         "<p>A Bangalore-based developer, Prestige elevates the zest to live in a tranquil sphere while staying connected to the city...</p>",
//     },
//   ],
//   floorPlansContent: [
//     {
//       data: [
//         {
//           floorPlanContent:
//             "<p>Soak amid coolness in the green settings enthralling yourself with the spectacular surroundings...</p>",
//         },
//       ],
//     },
//   ],
//   floorPlan: [
//     {
//       title: "4 BHK",
//       areaRangeSqft: "2451 - 2968",
//       areaRangeSqm: "227.71 - 275.74",
//     },
//     {
//       title: "3 BHK",
//       areaRangeSqft: "2005 - 2401",
//       areaRangeSqm: "186.27 - 223.06",
//     },
//     {
//       title: "5 BHK",
//       areaRangeSqft: "3505 - 3698",
//       areaRangeSqm: "325.63 - 343.56",
//     },
//   ],
//   projectGallery: [
//     {
//       alt: "Prestige Raintree Park",
//       desktopImage:
//         "star_estate/project_gallery/2024-10-16T05-52-58_desktop1.jpg",
//       mobileImage:
//         "star_estate/project_gallery/2024-10-16T05-53-01_6006001.jpg",
//     },
//     {
//       alt: "Prestige Raintree Park",
//       desktopImage:
//         "star_estate/project_gallery/2024-10-16T05-53-02_desktop.jpg",
//       mobileImage: "star_estate/project_gallery/2024-10-16T05-53-03_600600.jpg",
//     },
//   ],
//   banners: [
//     {
//       desktop_image_url:
//         "star_estate/ProjectBannerImage/2024-10-16_05-49-42_desktop1.jpg",
//       mobile_image_url:
//         "star_estate/ProjectBannerImage/2024-10-16_05-49-44_6006001.jpg",
//       tablet_image_url:
//         "star_estate/ProjectBannerImage/2024-10-16_05-49-45_8208201.jpg",
//       alt_tag_desktop: "Prestige Raintree Park",
//       alt_tag_mobile: "Prestige Raintree Park",
//       alt_tag_tablet: "Prestige Raintree Park",
//     },
//   ],
//   amenities: {
//     data: [
//       {
//         _id: "66b0606d4082a3aadf5f7f3e",
//         title: "Badminton Court",
//         alt_tag: "Badminton Court",
//         status: true,
//         image: "star_estate/amenities/badminton1new.webp",
//         category: "Sports",
//         __v: 0,
//       },
//       {
//         _id: "66b0606d4082a3aadf5f7f3d",
//         title: "Basketball Court",
//         alt_tag: "Basketball Court",
//         status: true,
//         image: "star_estate/amenities/basketball11new.webp",
//         category: "Sports",
//         __v: 0,
//       },
//     ],
//     data1: [
//       {
//         amenityContent:
//           "<p>The project is perfect for an incomparable lifestyle where residents exhibit love and affection for furry friends...</p>",
//       },
//     ],
//   },
//   location: {
//     data: [
//       {
//         _id: "66f26b7a258852a9635dd9e6",
//         title: "Office",
//         alt_tag: "Office",
//         image: "star_estate/location_advantages/office.png",
//         status: true,
//         __v: 0,
//         proximity: "2.9",
//         unit: "km",
//       },
//       {
//         _id: "66f25873258852a9635dc57f",
//         title: "University",
//         alt_tag: "University",
//         image: "star_estate/location_advantages/University.png",
//         status: true,
//         __v: 0,
//         proximity: "7",
//         unit: "km",
//       },
//       {
//         _id: "66f25741258852a9635dc570",
//         title: "Hospital",
//         alt_tag: "Hospital",
//         image: "star_estate/location_advantages/hospital.png",
//         status: true,
//         __v: 0,
//         proximity: "9.2",
//         unit: "km",
//       },
//       {
//         _id: "66f2575d258852a9635dc574",
//         title: "School",
//         alt_tag: "School",
//         image: "star_estate/location_advantages/school.png",
//         status: true,
//         __v: 0,
//         proximity: "5.7",
//         unit: "km",
//       },
//     ],
//     data1: [
//       {
//         locationContent:
//           "Prestige Raintree Park in Whitefield, Bangalore, offers a luxurious lifestyle with panoramic views of Varthur Lake...",
//       },
//     ],
//   },
//   faqs: [
//     {
//       faqQuestion:
//         "Is it possible to visit Prestige Raintree Park and does it hold an RERA-Registration number?",
//       faqAnswer:
//         "Yes, it is possible to make a site visit to Prestige Raintree Park in Bangalore. Yes, the developer holds the RERA-registration number for the project too.",
//     },
//     {
//       faqQuestion:
//         "What are the unit plans Prestige Raintree Park, Bangalore offers?",
//       faqAnswer:
//         "In Bangalore, Prestige Raintree Park offers 3BHK, 4BHK, and 5BHK luxury apartments.",
//     },
//   ],
// };

const ProjectDetails = () => {

  return (
    <>
      <Header />
      <Banner  />
      <FormSection/>
      <SectionWrapper />
      <Footer />
    </>
  );
};

export default ProjectDetails;
